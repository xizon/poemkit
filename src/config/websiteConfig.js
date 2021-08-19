
const ROOT_DIR = "";

const config = {
  // If the file is in the root directory, you can leave it empty. If in another directory, 
  // you can write: "/blog". (but no trailing slash)
  "rootDirectory": ROOT_DIR,

  "API": {

	  /*
	   TYPE: Posts
	   ------------------------------------------
       Corresponding to folder `./src/client/actions/*`
	  */
	  "RECEIVE_DEMO_LIST": "https://restcountries.eu/rest/v2",
	  "RECEIVE_DEMO_LISTDETAIL": "https://restcountries.eu/rest/v2/name/{id}",

	  //"RECEIVE_DEMO_LIST": `https://uiux.cc${ROOT_DIR}/assets/json/Posts.json`,
	  //"RECEIVE_DEMO_LISTDETAIL": `https://uiux.cc${ROOT_DIR}/assets/json/PostDetail.json`,


	  /*
	   TYPE: User
	   ------------------------------------------
       Corresponding to folder `./src/client/services/*`
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
       Corresponding to folder `./src/client/actions/*`
	  */
	  "RECEIVE_DEMO_LIST": `http://localhost:8888/uix-kit-react/public/assets/json/Posts.json`,
	  "RECEIVE_DEMO_LISTDETAIL": `http://localhost:8888/uix-kit-react/public/assets/json/PostDetail.json`,

	  
	  /*
	   TYPE: User
	   ------------------------------------------
       Corresponding to folder `./src/client/services/*`
	  */
	  "LOGIN_REQUEST": "http://localhost:8888/uix-kit-react/public/server/sessions-create.php",
	  "USER_AUTHENTICATE": "http://localhost:8888/uix-kit-react/public/server/authenticate.php",
	  "SIGNUP_REQUEST": ""
	  
  }

};


//
module.exports = config;
