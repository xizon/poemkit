// If the file is in the root directory, you can leave it empty. If in another directory, 
// you can write: "/blog". (no trailing slash)
const ROOT_DIR = "";

// The Site Address (URL) will be named `https://domain-name.com` (no trailing slash and subdirectory)
const SITE_URL = "";

const config = {
  "rootDirectory": ROOT_DIR,
  "siteUrl": SITE_URL,
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
	   TYPE: User (The PHP files are located at `./public/server/`)
	   ------------------------------------------
	  */
	  "LOGIN_REQUEST": `https://uiux.cc/server/sessions-create.php`,
	  "USER_AUTHENTICATE": `https://uiux.cc/server/authenticate.php`,
      "SIGNUP_REQUEST": "",
	
	  
      /*
       TYPE: CRUD (The PHP files are located at `./public/server/`)
       ------------------------------------------
      */
      "CRUD_SERVICE": `https://uiux.cc/server/curd.php`,
      "CRUD_DATA_INIT": `https://uiux.cc/server/curd-data-init.php`
	  
	    
  }


};


/**
 * API for Test on Localhost
 * 
 * (Please use a PHP server environment with a local port of 8888)
 */
const localConfig= {
  "rootDirectory": ROOT_DIR,
  "siteUrl": SITE_URL,
  "API": {

	  /*
	   TYPE: Posts
	   ------------------------------------------
	  */
	  "RECEIVE_DEMO_LIST": `http://localhost:8888/poemkit/public/assets/json/Posts.json`,
	  "RECEIVE_DEMO_LISTDETAIL": `http://localhost:8888/poemkit/public/assets/json/PostDetail.json?id={id}`,

	  /*
	   TYPE: Posts Pagination
	   ------------------------------------------
	  */
	   "RECEIVE_PAGE_LIST": `http://localhost:8888/poemkit/public/assets/json/pagination/page-{page}.json`,
 
	   
	  /*
	   TYPE: DropDown List
	   ------------------------------------------
	  */
	   "RECEIVE_DROPDOWN_LIST": `http://localhost:8888/poemkit/public/assets/json/DropDownList.json`,
 

	  /*
	   TYPE: User
	   ------------------------------------------
	  */
	  "LOGIN_REQUEST": "http://localhost:8888/poemkit/public/server/sessions-create.php",
	  "USER_AUTHENTICATE": "http://localhost:8888/poemkit/public/server/authenticate.php",
      "SIGNUP_REQUEST": "",

	  
      /*
       TYPE: CRUD
       ------------------------------------------
      */
      "CRUD_SERVICE": `http://localhost:8888/poemkit/public/server/curd.php`,
      "CRUD_DATA_INIT": `http://localhost:8888/poemkit/public/server/curd-data-init.php`
	  
  }

};


module.exports = config;
