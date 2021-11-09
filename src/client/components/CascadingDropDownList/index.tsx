/* 
 *************************************
 * <!-- Cascading DropDown List -->
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


/*-- Apply this component styles --*/
import '@poemkit/components/CascadingDropDownList/styles/_style.scss';

//
import axios from 'axios';
import Group from '@poemkit/components/CascadingDropDownList/Group';

type CascadingDropDownListProps = {
    /** API address to receive data */
    api: string;
    /** Set a name for the form field for this component  */
    name?: string;
    /** Set the depth value of the control to control the display of the pop-up layer appear above.
     * Please set it when multiple controls are used at the same time. */
    depth?: number;
    /** Request method to be used when making the request. The default is `post` */
    method?: string;
    /** Set a loader component to show while the component waits for the next load of data. 
     * e.g. `<span>Loading...</span>` or any fancy loader element */
    loader?: React.ReactNode;
    /** Set a default value */
    value?: string;
    /** /////  */
    /** Tag name of the trigger. Allowed values are: `a`, `button`, `div`, `span` */
    triggerTagName?: string;
    /** Specify a class for this Node. */
    triggerClassName?: string;
    /** Set a piece of text or HTML code for the trigger */
    triggerContent?: React.ReactNode;
    /** -- */
    id?: string;
};

interface SelectedDataConfig {
	labels?: string[] | undefined;
	values?: string[] | undefined;
}

type CascadingDropDownListState = {
    ajaxOptions?: any[any];
    firstLevelItems?: any[any];
    loading?: boolean;
    data?: any[any];
    selectedData?: SelectedDataConfig;
    isShow?: boolean;
};


export default class CascadingDropDownList extends Component<CascadingDropDownListProps, CascadingDropDownListState> {

    private valRef = React.createRef<HTMLInputElement>();

    uniqueID: string;

    constructor(props) {
        super(props);

        this.uniqueID = 'app-' + __.GUID.create();

        this.state = {
            ajaxOptions: [],
            firstLevelItems: [],
            loading: true,

            //for variable field
            data: [],
            selectedData: {
                labels: [],
                values: []
            },
            isShow: false
        };


        this.handleClickItem = this.handleClickItem.bind(this);
        this.handleDisplayOptions = this.handleDisplayOptions.bind(this);
        this.handleInitControl = this.handleInitControl.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		
	}



    /**
     * If clicked on outside of element
     */
     handleClickOutside(event) {
		if ( 
			event.target.className != '' && ( 
				event.target.className.indexOf( 'poemkit-cascading-dropdown-list__trigger' ) < 0 && 
				event.target.className.indexOf( 'poemkit-cascading-dropdown-list__items' ) < 0 && 
                event.target.className.indexOf( 'poemkit-cascading-dropdown-list__opt' ) < 0
			)
		   ) {
			this.setState({isShow: false});
		}
    }
    

    handleInitControl() {

        const firstLevelItems: any = [];
        this.state.ajaxOptions.forEach( (item) => {
            firstLevelItems.push({
                "id": item.id,
                "name": item.name
            });
        });


        //
        this.setState({
            data: [this.state.ajaxOptions],
            firstLevelItems: [firstLevelItems]
        })

        // update result to input
        const inputEl: any = this.valRef.current;
        inputEl.value = '';

    }

    handleDisplayOptions(e) {
        e.preventDefault();
        this.setState({isShow: !this.state.isShow});
    }


	handleClickItem(resValue, index, level) {

        console.log('resValue: ', resValue, ' | index: ', index, ' | level: ', level);

        // update value
        this.setValue( this.state.ajaxOptions, resValue.id );

        //
        const newData = this.state.data;  // such as: [Array(6), Array(3)]
        //console.log( 'newData: ', newData );

        // All the elements from start(array.length - start) to the end of the array will be deleted.
        newData.splice(level + 1);

        if (resValue.children) {
            const childList = resValue.children;
            this.markAllItems(childList);
            newData[level + 1] = childList;
        }


        //
        this.setState({
            data: newData
        });

        this.markCurrent(newData[level], index); 


	}


    getData() {
        if ( this.props.api === undefined ) return;

        //
        this.setState({
            loading: true
        });

        //
        const ajaxURL = this.props.api as string;
        const req = this.props.method!.toLowerCase() === 'get' ? axios.get(ajaxURL) : axios.post(ajaxURL);
        let allData: any = null;
        req.then((res) => {
            allData = res.data.data;

            this.setState({
                loading: false
            });

            if (allData !== undefined) {

                this.setState({
                    ajaxOptions: allData,
                });


                //Initialize options 
                this.handleInitControl();

                //Set a default value
                if ( this.props.value ) this.setValue( allData, this.props.value );

            }


        });


    }


    // active the selected item
    markCurrent(arr, index) {
        for (let i = 0; i < arr.length; i++) {
            if (i === index) {
                arr[i].current = true;
            } else {
                arr[i].current = false;
            }
        }
    }

    // deactivate all items
    markAllItems(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].current = false;
        }
    }



    setValue(arr, targetVal) {

        // update result to input
        const inputEl: any = this.valRef.current;
        inputEl.value = targetVal;
        
        //search JSON key that contains specific string
        this.setState({
            selectedData: {
                labels: this.queryResultOfJSON(arr, targetVal, 'value' ),
                values: this.queryResultOfJSON(arr, targetVal, 'key' )
            }
        });
        
    }
    

    queryResultOfJSON(data, targetVal, returnType) {

        let callbackValueNested = [];
        let lastFirstLevelName = '';
        let loop = true;
        let resDepth = 0;
    
        const getIndexOf = function(arr, val) {
            for (let i=0; i<arr.length; i++) {
                if( arr[i].id.toString() === val.toString() ){
                    return i;
                }
            }
            return -1;
        };
    
    
        const searchJsonStr = function(list, depth?) {
    
            // `depth` is very important, it is used to accurately judge the final result
            if (typeof(depth) === 'undefined') {
                depth = 0;
            } else {
                depth++;
            }
                
            for ( let i = 0; i < list.length; i++ ) {
    
                const row = list[i];
                const callbackValue: any = returnType === 'key' ? row.id.toString() : row.name.toString();
                
                if ( loop ) {
                    // get first-level item
                    if ( getIndexOf(data, row.id) !== -1 ) {
                        callbackValueNested.push(callbackValue as never);
                        lastFirstLevelName = callbackValue;
                    }
    
                    // get child-level item
                    if (row.children) {
                        callbackValueNested.push(callbackValue as never);
                    }
    
                }
    
    
                //check the value
                if ( row.id.toString() === targetVal.toString() ) {
                    callbackValueNested.push(callbackValue as never);
                    loop = false;
                    resDepth = depth;
                    break;
                }
    
    
                // Note: Recursion must be placed here
                if ( loop ) {
                    if (row.children) {
                        searchJsonStr(row.children, depth);
                    }	
                }
    
    
                
            }
    
    
        }
        searchJsonStr(data);
    
    
        // (1) Remove duplicate values
        //------------------------------------------
        callbackValueNested = callbackValueNested.filter(function(item, index, arr) {
            return arr.indexOf(item, 0) === index;
        });
    
    
        // (2) Delete needless first-level
        //------------------------------------------
        let resAll = callbackValueNested.slice(callbackValueNested.indexOf( lastFirstLevelName as never ), callbackValueNested.length)
    
    
        // (3) Returns result
        //------------------------------------------
        if ( resAll.length > 1 ) {
            // Get first-level item
            resAll.splice(1);
            
            // Get child-level item
            let resChild = callbackValueNested.slice(-resDepth); // Get the last elements in reverse
            
            // Combine
            resAll = resAll.concat( resChild );
            
        }
    
        return resAll;
    
    }
    



    createTrigger(tagName, classes, content) {
        switch (tagName) {
            case 'a':
                return <a role="button" href="#" className={"poemkit-cascading-dropdown-list__trigger " + classes} onClick={this.handleDisplayOptions}>{content}</a>;

            case 'button':
                return <button type="button" className={"poemkit-cascading-dropdown-list__trigger " + classes} onClick={this.handleDisplayOptions}>{content}</button>;

            case 'div':
                return <div role="button" className={"poemkit-cascading-dropdown-list__trigger " + classes} onClick={this.handleDisplayOptions}>{content}</div>;

            case 'span':
                return <span role="button" className={"poemkit-cascading-dropdown-list__trigger " + classes} onClick={this.handleDisplayOptions}>{content}</span>;

        }
    }



    componentDidMount() {

        // load data
        this.getData();

        //
		document.removeEventListener('click', this.handleClickOutside);
		document.addEventListener('click', this.handleClickOutside);
    }


	/** Remove the global list of events, especially as scroll and interval. */
	componentWillUnmount() {

		// Remove scroll events from document
		document.removeEventListener('click', this.handleClickOutside);

	}


    render() {

        const {
            name,
            depth,
            loader,
            triggerTagName,
            triggerClassName,
            triggerContent,
            id
        } = this.props;

        const {
            data,
            selectedData,
            isShow
        } = this.state;

        const displayInfo = selectedData!.labels ? selectedData!.labels.map((item, i, arr) => {
            if (arr.length - 1 === i) {
                return <span key={i}>{item}</span>
            } else {
                return (
                    <>
                    <span key={i}>{item}</span><svg viewBox="0 0 22 22" width="8"><path d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" transform="matrix(.03541-.00013.00013.03541 2.98 3.02)" fill="#a5a5a5"/></svg>
                    </>
                )
            }
        }) : '';

        return (
            <>

                <div
                    id={id || this.uniqueID}
                    className="poemkit-cascading-dropdown-list" style={{zIndex:(depth ? depth : 1)}}>

                    <input name={name || ''} type="hidden" ref={this.valRef} />
                    {selectedData!.values ? selectedData!.values.map((item, i) => {
                        return <input key={i} name={`${name}-node[]`} type="hidden" defaultValue={item} />
                    }) : ''}

                    {this.createTrigger(triggerTagName, triggerClassName, triggerContent)}
       
                    <em className="poemkit-cascading-dropdown-list__result">{displayInfo}</em>

                    {isShow ? (
                        <div className="poemkit-cascading-dropdown-list__items">
                            <ul>
                                {data.map((item, level) => {
                                    return (
                                        <li key={level}>
                                            <Group data={item} selectEv={(value, index) => this.handleClickItem(value, index, level)} />
                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                    ) : null}


                    {this.state.loading ? <><div>{loader}</div></> : null}

                </div>

            </>
        )
    }
}

