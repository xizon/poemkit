/* 
 *************************************
 * <!-- InfiniteScroll -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@poemkit/components/_plugins/_lib-bootstrap';
import '@poemkit/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@poemkit/components/_plugins/_lib-gsap';

/*-- Apply global scripts and styles --*/
import '@poemkit/components/_utils/styles/_all.scss';
import '@poemkit/components/_utils/styles/rtl/_all.scss';
import { __ } from '@poemkit/components/_utils/_all';

//
import axios from 'axios';

type InfiniteScrollFnType = (arg1: any) => void;

type InfiniteScrollProps = {
    /** API address to receive data */
    api: string;
    /** The number of posts we want on the page before loading the next set. Which we set to 10 by default. */
    perPage?: number;
    /** Request method to be used when making the request. The default is `post` */
    method?: string;
    /** Set a loader component to show while the component waits for the next load of data. 
     * e.g. `<span>Loading...</span>` or any fancy loader element */
    loader?: React.ReactNode;
    /** This message is shown to the user when he has seen all the records. */
    endMessage?: React.ReactNode;
    /** Set an offset to scroll to the bottom */
    bottomOffset?: number;
    /** This function is called whenever the data is updated, including initialization.
     *  Exposes the JSON format data about the page number as an argument.
     */
    refreshCallback?: InfiniteScrollFnType | null;
    /** Use the return function to render the data. The output HTML template uses custom HTML string in the 
     * returned JSON format data as a placeholder.
     * Exposes each item data as an argument. 
     * You can use it like this: `(res) => {return <div key={"item" + res.id}><img src={res.avatar} />{res.name}</div>;}` */
    renderCallback?: InfiniteScrollFnType | null;
    /** -- */
    id?: string;
};
type InfiniteScrollState = {
    page: number;
    perPage?: number;
    loading?: boolean;
    posts?: any[any];
    endMsgDispay?: React.ReactNode | boolean;
};


export default class InfiniteScroll extends Component<InfiniteScrollProps, InfiniteScrollState> {

    private rootRef = React.createRef<HTMLDivElement>();

    windowScrollUpdate: () => void;
    uniqueID: string;
    totalPages: number;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

        this.totalPages = 1;
		this.state = {
			perPage: this.props.perPage ? this.props.perPage : 10,
			posts: [],
			loading: true,
			page: 1,
            endMsgDispay: false
		};

        // Add a scroll event listener to window
        this.handleScrollEvent = this.handleScrollEvent.bind(this);
        this.windowScrollUpdate = __.throttle(this.handleScrollEvent, 5);

    }

    handleScrollEvent() {

        const reactDomEl: any = this.rootRef.current;
        const bottomOffsetVal = this.props.bottomOffset ? this.props.bottomOffset : 0;

		// Detect scroll end of the specified element
        if ( !this.state.loading ) {

            const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrolled >= reactDomEl.getBoundingClientRect().height - window.innerHeight - bottomOffsetVal){
                this.loadMore();
            }

        }

    }

    loadMore() {
        if ( this.state.page < this.totalPages ) {
            const curPage = this.state.page + 1;
            this.getData(curPage);

            this.setState({ 
                page: curPage,
                loading: true
            });

            //console.log( 'curPage: ', curPage );
        }
    }
    
	getData(currentPage) {
        if ( this.props.api === undefined ) return;

        //
        const displayNum: any = this.state.perPage;
        const ajaxURL = (this.props.api as string).replace('{page}', currentPage).replace('{perPage}', displayNum );
        const req = this.props.method!.toLowerCase() === 'get' ? axios.get(ajaxURL) : axios.post(ajaxURL);
        let allData: any = null;
        req.then((res) => {

            const oldData = this.state.posts;
            const newData = res.data.data;

            this.setState({ 
                loading: false
            });

            if ( newData !== undefined ) {

                allData = [...oldData, ...newData];

                // Determine whether it is the last page
                this.totalPages = res.data.total_pages;
                let endMessageUpdate: any = false;
                if ( currentPage === this.totalPages ) endMessageUpdate = this.props.endMessage;
                
                this.setState({ 
                    posts: allData,
                    endMsgDispay: endMessageUpdate
                });

                //This function is called whenever the data is updated
                if ( typeof(this.props.refreshCallback) === 'function' ) {
                    this.props.refreshCallback({
                        data: allData,
                        currentPage: currentPage,
                        totalPages: this.totalPages
                    });
                }

            }

        

        });

    
	}


    componentDidMount() {
        // load first page data
        this.getData(this.state.page);


        // Add function to the element that should be used as the scrollable area.
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);
        window.addEventListener('scroll', this.windowScrollUpdate);
        window.addEventListener('touchmove', this.windowScrollUpdate);
    
        // Prevent calculation errors caused by unloaded completion
        __( document ).ready( () => {
            this.windowScrollUpdate();
        });
         
    }

    /** Remove the global list of events, especially as scroll and interval. */
    componentWillUnmount() {
		
        // Remove scroll events from window
        window.removeEventListener('scroll', this.windowScrollUpdate);
        window.removeEventListener('touchmove', this.windowScrollUpdate);  

    }



    render() {

        const {
            loader,
            id,
        } = this.props;

        const preloadedState = this.state.posts;

        return (
            <>

                <div 
                ref={this.rootRef}
                id={id || this.uniqueID}>

                    {preloadedState.map((item, i) => {
                        if ( typeof(this.props.renderCallback) === 'function' ) {
                            return this.props.renderCallback(item);
                        }
                    })}
    
                    {this.state.loading ? <><div>{loader}</div></> : null}
                    {this.state.endMsgDispay ? <><div className="poemkit-clearfix"></div>{this.state.endMsgDispay}</> : null}


                </div>


            </>
        )
    }
}

