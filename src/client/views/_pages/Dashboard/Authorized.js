import React, { Component } from 'react';
import { __ } from '@/components/_utils/_all';
import UserService from "@/services/user-service.js";
import CRUDService from "@/services/crud-service.js";
import DashboardModal from '@/components/DashboardModal';




/*
////////////////////////////////////////////////////////////
///////////////   (1) Data List   ///////////////
////////////////////////////////////////////////////////////
*/
function detailTable(
    id = '',
    name = '',
    email = '',
    avatar = ''
) {

    return (
        <table>
            <tbody>
                <tr style={{ display: id != '' ? 'table-row' : 'none' }}>
                    <td width="138" align="right">
                        <strong>ID: </strong>
                    </td>
                    <td>
                        {id}
                    </td>
                </tr>
                <tr>
                    <td width="138" align="right">
                        <strong>Name: </strong>
                    </td>
                    <td>
                        {name}
                    </td>
                </tr>
                <tr>
                    <td width="138" align="right">
                        <strong>Email: </strong>
                    </td>
                    <td>
                        {email}
                    </td>
                </tr>
                <tr>
                    <td width="138" align="right">
                        <strong>Avatar: </strong>
                    </td>
                    <td>
                        {avatar}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}



class DataList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datalist: [],

            // detail container
            detail: {
                display: false,
                content: 'loading...'
            },

            // form
            formAdd: {
                display: false,
                content: 'loading...'
            },
            formEdit: {
                display: false,
                content: 'loading...'
            }
        };

        this.handleDetail = this.handleDetail.bind(this);
        this.handleAddForm = this.handleAddForm.bind(this);
        this.handleEditForm = this.handleEditForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
        



    }


    /**
     * Get all data
     * ------------------
     */
    getAll = async () => {
        let response = await CRUDService.getAll();

        this.setState({
            datalist: response.data.data
        });
    }

    /**
    * Get data from ID
    * ------------------
    */
    get = async (id) => {
        let response = await CRUDService.get(id);
        const _data = response.data.data;

        this.setState({
            detail: {
                display: true,
                content: detailTable(_data.id, _data.name, _data.email, <><img src={_data.avatar} width="100" /></>)
            }
        });

    }

    handleDetail(id) {
        const self = this;
        return function (e) { // e is the event object that returned
            e.preventDefault();

            console.log('detail id: ', id);
            self.get(id);

        };
    }


    /**
    * Create a new data
    * ------------------
    */
    handleAddForm(e) {
        e.preventDefault();

        const formCode = (
            <form tabIndex={-1} method="post" style={{ padding: "20px" }}>
                {detailTable(
                    false,
                    <><input type="text" size={20} name="name" /></>,
                    <><input type="text" size={20} name="email" /></>,
                    <><input type="text" size={35} name="avatar" placeholder="http://" /></>
                )}
                <input style={{ padding: "5px 15px", background: "rgb(57 57 57)", outline: "none", color: "#fff", borderRadius: "30px", border: "none", fontSize: "12px", marginLeft: "142px" }} type="button" value="Submit" onClick={this.handleSubmit('add')} />
            </form>
        );


        this.setState({
            formAdd: {
                display: true,
                content: formCode
            }
        });

    }


    /**
    * Update data from ID
    * ------------------
    */
    getUpdateId = async (id) => {
        let response = await CRUDService.get(id);
        const _data = response.data.data;

        const formCode = (
            <form tabIndex={-1} style={{ padding: "20px" }}>
                {detailTable(
                    false,
                    <><input type="text" size={20} name="name" defaultValue={_data.name} /></>,
                    <><input type="email" size={20} name="email" defaultValue={_data.email} /></>,
                    <><input type="text" size={35} name="avatar" placeholder="http://" defaultValue={_data.avatar} /></>
                )}
                <input style={{ padding: "5px 15px", background: "rgb(57 57 57)", outline: "none", color: "#fff", borderRadius: "30px", border: "none", fontSize: "12px", marginLeft: "142px" }} type="button" value="Update" onClick={this.handleSubmit('edit', id)} />
            </form>
        );

        this.setState({
            formEdit: {
                display: true,
                content: formCode
            }
        });

    }

    handleEditForm(id) {
        const self = this;
        return function (e) { // e is the event object that returned
            e.preventDefault();

            console.log('update id: ', id);
            self.getUpdateId(id);

        };
    }


    /**
    * Remove data from ID
    * ------------------
    */
    remove = async (id) => {

        let response = await CRUDService.remove(id);
        if (response.data.code === 200) {
            //refresh list
            this.getAll();
        }
    }

    handleDelete(id) {
        console.log('delete id: ', id);

        //
        this.remove(id);
    }


    /**
    * Create or Update form data
    * ------------------
    */

    handleSubmit(type, id = '') {
        const self = this;
        return function (e) { // e is the event object that returned
            e.preventDefault();


            const root = e.target.closest('form');
            const $inputs = Array.prototype.slice.call(root.querySelectorAll('input'));
            const serializeObj = {};

            //data for each input
            $inputs.forEach((node) => {
                if (node.type !== "button") {
                    serializeObj[node.name] = node.value;
                }
            });


            //control status
            $inputs.forEach((node) => {
                node.disabled = true;
            });


            //
            const formData = new FormData();
            const defaultPostData = {
                action: type === 'add' ? 'add_new_post' : 'add_edit_post',
                ...serializeObj
            };

            console.log('formData: ', defaultPostData);

            for (let k in defaultPostData) {
                formData.append(k, defaultPostData[k]);
            }

            //
            const refreshList = () => {
                //control status
                $inputs.forEach((node) => {
                    node.value = '';
                    node.disabled = false;
                });


                //refresh list
                self.getAll();
            };

            if (type === 'add') {
                CRUDService.create(formData).then((response) => {
                    if (response.data.code === 200) {
                        // close window

                        self.setState(prevState => {
                            return {
                                ...prevState,
                                formAdd: {
                                    ...prevState.formAdd.content,
                                    display: false
                                }
                            };
                        });

                        refreshList();
                    }
                });
            }
            if (type === 'edit') {
                CRUDService.update(id, formData).then((response) => {
                    if (response.data.code === 200) {
                        // close window

                        self.setState(prevState => {
                            return {
                                ...prevState,
                                formEdit: {
                                    ...prevState.formEdit.content,
                                    display: false
                                }
                            };
                        });

                        refreshList();
                    }
                });
            }


        };

    }


    async componentDidMount() {
        await this.getAll();
    }


    render() {

        return (
            <>

                <h4>Data &nbsp;&nbsp;&nbsp;&nbsp;<a style={{ padding: "7px 25px", background: "#191919", outline: "none", color: "#fff", borderRadius: "30px", border: "none", fontSize: "14px", textDecoration: "none" }} href="#" onClick={this.handleAddForm}>Add New</a></h4>

                <hr />

                <ul>
                    {!this.state.datalist ? <>Loading...</> : this.state.datalist.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href="#" onClick={this.handleDetail(item.id)}>({item.id}) {item.name} - {item.email}</a>


                                <div style={{ float: "right" }}>

                                    {/* ------- Edit Button -------- */}
                                    <a href="#" onClick={this.handleEditForm(item.id)}><svg version="1.1" height="15" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                                        <g><path d="M470.1,744.4L277.9,552.2L797.8,32.3L990,224.5L470.1,744.4z M345.9,552.2l124.3,124.3l452-452L797.8,100.2L345.9,552.2z" /><path d="M238.6,576l207.6,207.6l-222.4,14.8L238.6,576z" /><path d="M889.6,967.7H10V75h524.4v48H58v796.6h783.6V521.4h48V967.7z" /></g>
                                    </svg></a>&nbsp;&nbsp;


                                    {/* ------- Delete Button -------- */}
                                    <DashboardModal
                                        modalId={"modal-del-" + item.id}
                                        targetId={item.id}
                                        title={<><svg height="15" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
                                            <g><path d="M653.1,867.5c16.8,0,30.6-13.8,30.6-30.6V469.4c0-16.8-13.8-30.6-30.6-30.6c-16.8,0-30.6,13.8-30.6,30.6v367.5C622.5,853.7,636.3,867.5,653.1,867.5z M346.9,867.5c16.8,0,30.6-13.8,30.6-30.6V469.4c0-16.8-13.8-30.6-30.6-30.6s-30.6,13.8-30.6,30.6v367.5C316.3,853.7,330,867.5,346.9,867.5z M836.9,132.5H653.1V71.3c0-33.7-27.6-61.3-61.3-61.3H408.1c-33.7,0-61.3,27.6-61.3,61.3v61.3H163.1c-33.7,0-61.3,27.6-61.3,61.3V255c0,33.7,27.6,61.3,61.3,61.3v551.3c0,67.4,55.1,122.5,122.5,122.5h428.8c67.4,0,122.5-55.1,122.5-122.5V316.3c33.7,0,61.3-27.6,61.3-61.3v-61.2C898.1,160.1,870.6,132.5,836.9,132.5z M408.1,101.9c0-16.8,13.8-30.6,30.6-30.6h122.5c16.8,0,30.6,13.8,30.6,30.6v30.6c-29.9,0-183.8,0-183.8,0V101.9z M775.6,867.5c0,33.7-27.6,61.3-61.3,61.3H285.6c-33.7,0-61.3-27.6-61.3-61.3V316.3h551.3V867.5z M806.3,255H193.8c-16.8,0-30.6-13.8-30.6-30.6s13.8-30.6,30.6-30.6h612.5c16.8,0,30.6,13.8,30.6,30.6S823.1,255,806.3,255z M500,867.5c16.8,0,30.6-13.8,30.6-30.6V469.4c0-16.8-13.8-30.6-30.6-30.6s-30.6,13.8-30.6,30.6v367.5C469.4,853.7,483.2,867.5,500,867.5z" /></g>
                                        </svg></>}
                                        content={<>
                                            <p>
                                                You will delete this post via ID {item.id}. <br />
                                                <a href="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleDelete(item.id);
                                                }}>Are you sure?</a>

                                            </p>
                                        </>}
                                        showClickEvent={() => {
                                            const _modal = document.querySelector('#modal-del-' + item.id);
                                            _modal.style.display = 'flex';

                                        }}
                                        closeClickEvent={() => {
                                            const _modal = document.querySelector('#modal-del-' + item.id);
                                            _modal.style.display = 'none';
                                        }}
                                    />
                                </div>

                            </li>
                        );
                    })}
                </ul >


                {/* ------- Detail container -------- */}
                <DashboardModal
                    show={this.state.detail.display}
                    modalId={"modal-detail-container"}
                    targetId={9997}
                    title={null}
                    content={this.state.detail.content}
                    closeClickEvent={() => {

                        this.setState(prevState => {
                            return {
                                ...prevState,
                                detail: {
                                    ...prevState.detail.content,
                                    display: false
                                }
                            };
                        });

                    }}
                />

                {/* ------- Form(add) -------- */}
                <DashboardModal
                    show={this.state.formAdd.display}
                    modalId={"modal-form-add-container"}
                    targetId={9998}
                    title={null}
                    content={this.state.formAdd.content}
                    closeClickEvent={() => {

                        this.setState(prevState => {
                            return {
                                ...prevState,
                                formAdd: {
                                    ...prevState.formAdd.content,
                                    display: false
                                }
                            };
                        });

                    }}
                />


                {/* ------- Form(efit) -------- */}
                <DashboardModal
                    show={this.state.formEdit.display}
                    modalId={"modal-form-edit-container"}
                    targetId={9999}
                    title={null}
                    content={this.state.formEdit.content}
                    closeClickEvent={() => {

                        this.setState(prevState => {
                            return {
                                ...prevState,
                                formEdit: {
                                    ...prevState.formEdit.content,
                                    display: false
                                }
                            };
                        });
                    }}
                />

            </>
        )
    }
}


/*
////////////////////////////////////////////////////////////
///////////////   (2) User Info   ///////////////
////////////////////////////////////////////////////////////
*/
class Authorized extends Component {

    constructor(props) {
        super(props);


        this.state = {
            userName: '...'
        };

    }

    componentDidMount() {

        const self = this;

        UserService.getUserName().then(function (response) {
            self.setState({ userName: response });
        });
    }


    render() {

        return (
            <>
                {this.state.userName !== '' ? <><p style={{ color: "green" }}>&#08730; You need to be authorized after successful login to see this information.</p><p>Your user name is: <code>{this.state.userName}</code></p></> : ''}

                <div className="alert alert-warning" role="alert">
                    Note: The server may prohibit PHP data manipulation, Axios request will not be able to complete the data change.
                </div>
                <DataList />

            </>
        );

    }

}

export default Authorized;

