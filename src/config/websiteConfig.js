/**
 * Corresponding to folder `./src/client/actions/*`
 */

const ROOT_DIR = "";

const config = {
  // If the file is in the root directory, you can leave it empty. If in another directory, 
  // you can write: "/blog". (but no trailing slash)
  "rootDirectory": ROOT_DIR,

  "API": {

	  /*
	   TYPE: Posts
	   ------------------------------------------
	  */
	  "RECEIVE_DEMO_LIST": "https://restcountries.com/v2/all",
	  "RECEIVE_DEMO_LISTDETAIL": "https://restcountries.com/v2/name/{id}",

	  //"RECEIVE_DEMO_LIST": `https://uiux.cc${ROOT_DIR}/assets/json/Posts.json`,
	  //"RECEIVE_DEMO_LISTDETAIL": `https://uiux.cc${ROOT_DIR}/assets/json/PostDetail.json?id={id}`,

	  
	  /*
	   TYPE: Posts Pagination
	   ------------------------------------------
	  */
	   "RECEIVE_PAGE_LIST": `https://uiux.cc/server/posts-pagination.php?page={page}`,
 

	  /*
	   TYPE: DropDown List
	   ------------------------------------------
	  */
	   "RECEIVE_DROPDOWN_LIST": `https://uiux.cc/server/dropdown-list.php`,
 

	  /*
	   TYPE: User
	   ------------------------------------------
	  */
	  "LOGIN_REQUEST": `https://uiux.cc/server/sessions-create.php`,
	  "USER_AUTHENTICATE": `https://uiux.cc/server/authenticate.php`,
	  "SIGNUP_REQUEST": ""
	  
	    
  }


};


/**
 * API for Test (Please use a PHP server environment with a local port of 8888)
 */
const configTest = {
  // If the file is in the root directory, you can leave it empty. If in another directory, 
  // you can write: "/blog". (but no trailing slash)
  "rootDirectory": ROOT_DIR,
	
  "API": {

	  /*
	   TYPE: Posts
	   ------------------------------------------
	  */
	  "RECEIVE_DEMO_LIST": `http://localhost:8888/uix-kit-react/public/assets/json/Posts.json`,
	  "RECEIVE_DEMO_LISTDETAIL": `http://localhost:8888/uix-kit-react/public/assets/json/PostDetail.json?id={id}`,

	  /*
	   TYPE: Posts Pagination
	   ------------------------------------------
	  */
	   "RECEIVE_PAGE_LIST": `http://localhost:8888/uix-kit-react/public/assets/json/pagination/page-{page}.json`,
 
	   
	  /*
	   TYPE: DropDown List
	   ------------------------------------------
	  */
	   "RECEIVE_DROPDOWN_LIST": `http://localhost:8888/uix-kit-react/public/assets/json/DropDownList.json`,
 

	  /*
	   TYPE: User
	   ------------------------------------------
	  */
	  "LOGIN_REQUEST": "http://localhost:8888/uix-kit-react/public/server/sessions-create.php",
	  "USER_AUTHENTICATE": "http://localhost:8888/uix-kit-react/public/server/authenticate.php",
	  "SIGNUP_REQUEST": ""
	  
  }

};


//
module.exports = config;
