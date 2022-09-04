import React from 'react';
import { __ } from '@/components/_utils/_all';

import axios from 'axios';
import { useState } from 'react';
import DashboardModal from '@/components/DashboardModal/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@/pages/ComponentsDemo/_SidebarMenu.js';


function handleDetail() {
    //`id` comes from the public parameter thrown by the component `<DashboardModal />`
    console.log('id: ', id);

    // other actions
    // ...
}

export default () => {

    const [winstate, setWinstate] = useState(false);
    const [datalist, setDataList] = useState([]);


    async function getAll() {
        let response = await axios.get(`https://restcountries.com/v2/all`);
        const res = response.data;
        let _data = res.map((item, i) => {
            if ( i < 6 ) {
                return (
                    <li key={item.id}>
                    {item.name}
                    </li>
                );
            }
        })
        setWinstate(true);
        setDataList(<><ul>{_data}</ul></>);
    }


    React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:

        __(document).ready(() => {
            //Create sidebar menu
            SidebarMenu();
        });
    });

    return (
        <>

            {/*<!-- Content 
		====================================================== -->*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="poemkit-typo--h2">
                                Dashboard Modal(via API)
                                <a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/DashboardModal" target="_blank"><span className="poemkit-dir--right" style={{ fontSize: "0.75rem", color: "#ababab", margin: ".5rem .5rem 0 0" }}><svg style={{ marginRight: ".5rem" }} width="15" viewBox="0 0 392.186 392.186"><g><g><g><path fill="#d2d2d2" d="M368.62,17.951H23.568C10.57,17.951,0,28.524,0,41.52v309.146c0,12.996,10.57,23.568,23.568,23.568h345.053c12.994,0,23.564-10.572,23.564-23.568V41.52C392.188,28.525,381.614,17.951,368.62,17.951z M297.56,57.528c0-4.806,3.896-8.703,8.701-8.703h8.703c4.808,0,8.701,3.896,8.701,8.703v9.863c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.805,0-8.701-3.896-8.701-8.702V57.528z M257.093,57.528c0-4.806,3.898-8.703,8.703-8.703h8.701c4.805,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.898,8.702-8.703,8.702h-8.701c-4.805,0-8.703-3.896-8.703-8.702V57.528z M363.903,345.951H28.282V102.235h335.621V345.951L363.903,345.951z M364.132,67.391c0,4.806-3.896,8.702-8.701,8.702h-8.703c-4.809,0-8.702-3.896-8.702-8.702v-9.863c0-4.806,3.896-8.703,8.702-8.703h8.703c4.806,0,8.701,3.896,8.701,8.703V67.391z" /><path fill="#d2d2d2" d="M84.185,233.284l63.084,29.336c1.631,0.755,3.367,1.138,5.162,1.138c2.338,0,4.617-0.664,6.598-1.924c3.547-2.267,5.666-6.13,5.666-10.334v-0.322c0-4.752-2.785-9.116-7.096-11.118l-39.455-18.332l39.455-18.334c4.311-2.004,7.096-6.367,7.096-11.117v-0.319c0-4.21-2.119-8.075-5.666-10.334c-1.961-1.253-4.246-1.916-6.605-1.916c-1.779,0-3.563,0.391-5.16,1.133l-63.08,29.333c-4.307,2.004-7.09,6.369-7.09,11.117v0.877C77.093,226.909,79.874,231.272,84.185,233.284z" /><path fill="#d2d2d2" d="M165.257,293.036c2.301,3.149,6.002,5.03,9.9,5.03h0.316c5.352,0,10.041-3.426,11.672-8.517L228.7,160.788c1.192-3.716,0.531-7.818-1.771-10.973c-2.301-3.15-6.002-5.03-9.901-5.03h-0.315c-5.354,0-10.048,3.425-11.679,8.516l-41.559,128.771C162.292,285.793,162.958,289.889,165.257,293.036z" /><path fill="#d2d2d2" d="M227.49,192.276c0,4.745,2.783,9.109,7.095,11.123l39.455,18.329l-39.455,18.33c-4.31,2.004-7.095,6.368-7.095,11.118v0.322c0,4.205,2.117,8.068,5.668,10.336c1.974,1.258,4.254,1.924,6.595,1.924c1.793,0,3.528-0.383,5.17-1.142l63.08-29.335c4.307-2.009,7.09-6.372,7.09-11.115v-0.877c0-4.748-2.783-9.113-7.094-11.117l-63.08-29.333c-1.591-0.74-3.373-1.131-5.152-1.131c-2.355,0-4.643,0.661-6.604,1.912c-3.551,2.263-5.67,6.127-5.67,10.337v0.318H227.49L227.49,192.276z" /></g></g></g></svg>Docs on GitHub</span></a>
                            </h1>
                            <p>This component creates an element that provides little hints that help users understand a part or process in an interface.</p>
                        </div>
                    </div>
                    {/*<!-- .row end -->*/}

                </div>
                {/*<!-- .container end -->*/}

            </section>



            {/*<!-- Content 
		====================================================== -->*/}
            <section className="poemkit-spacing--s poemkit-spacing--no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="app-header-title">Demos</h3>
                            <p>This is a CRUD with axios demo on Dashboard page. <i>(The server may prohibit PHP data manipulation, Axios request will not be able to complete the data change.)</i></p>
                            <hr />


                        </div>
                    </div>
                    {/*<!-- .row end -->*/}

                </div>
                {/*<!-- .container end -->*/}

            </section>





            {/*<!-- Content 
		====================================================== -->*/}
            <section className="poemkit-spacing--s">
                <div className="container">


                    <div className="row">
                        <div className="col-12">


                            <DashboardModal
                                show={winstate}
                                modalId={"modal-1"}
                                targetId={1}
                                title={<>🔥Click Here (Hyperlink, or anything)</>}
                                content={datalist}
                                gotoIdClickEvent={handleDetail}
                                showClickEvent={() => {
                                    console.log('show windw');
                                    getAll();
                                }}
                                closeClickEvent={() => {
                                    console.log('hide windw');
                                    setWinstate(false);
                                }}
                            />





                        </div>
                    </div>
                    {/*<!-- .row end -->*/}




                </div>
                {/*<!-- .container end -->*/}

            </section>



            {/*<!-- API 
		====================================================== -->*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="app-header-title">API</h3>
                            <hr />


                            <article className="poemkit-spacing--s" itemProp="text">
                                <h4>Dashboard Modal</h4>
                                <div>
                                    <pre>import DashboardModal from '@/components/DashboardModal/index.tsx';</pre>
                                </div>

                                <div className="table-responsive-md">

                                    <table className="table table-bordered table-striped mb-5">
                                        <thead>
                                            <tr>
                                                <th>Property</th>
                                                <th>Type</th>
                                                <th>Default</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>modalId</code></td>
                                                <td>number</td>
                                                <td>-</td>
                                                <td><strong>(Required)</strong> The modal ID.</td>
                                            </tr>
                                            <tr>
                                                <td><code>targetId</code></td>
                                                <td>number</td>
                                                <td>-</td>
                                                <td><strong>(Required)</strong> ID parameter to send request.</td>
                                            </tr>
                                            <tr>
                                                <td><code>show</code></td>
                                                <td>boolean</td>
                                                <td>false</td>
                                                <td>Whether to display the window by default.</td>
                                            </tr>
                                            <tr>
                                                <td><code>title</code></td>
                                                <td>string | React.ReactNode</td>
                                                <td>-</td>
                                                <td>Trigger text of the window</td>
                                            </tr>
                                            <tr>
                                                <td><code>content</code></td>
                                                <td>string | React.ReactNode</td>
                                                <td>-</td>
                                                <td>The content of the window displayed</td>
                                            </tr>
                                            <tr>
                                                <td><code>showClickEvent</code></td>
                                                <td>function</td>
                                                <td>-</td>
                                                <td>Opening the window is the triggered event</td>
                                            </tr>
                                            <tr>
                                                <td><code>closeClickEvent</code></td>
                                                <td>function</td>
                                                <td>-</td>
                                                <td>Closing the window is the triggered event</td>
                                            </tr>
                                            <tr>
                                                <td><code>gotoIdClickEvent</code></td>
                                                <td>function</td>
                                                <td>-</td>
                                                <td>The method to call when a page is clicked. Exposes the current ID as an argument.</td>
                                            </tr>
                                        </tbody>
                                    </table>




                                </div>

                                {/*<!-- ++++++++ -->*/}

                            </article>


                        </div>
                    </div>
                    {/*<!-- .row end -->*/}


                </div>
                {/*<!-- .container end -->*/}
            </section>




        </>
    );
};