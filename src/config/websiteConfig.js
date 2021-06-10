/* API for Test  */
const configTest = {
  "rootDirectory": "",
  "API": {

	  /*------ Posts -------*/
	  "RECEIVE_DEMO_LIST": "../../assets/json/Posts.json",
	  "RECEIVE_DEMO_LISTDETAIL": "../../assets/json/PostDetail.json",

	  /*------ Login -------*/
	  "LOGIN_REQUEST": "http://localhost:8888/uix-kit-react/public/server/sessions-create.php",
	  "LOGIN_AUTHENTICATE": "http://localhost:8888/uix-kit-react/public/server/authenticate.php"

  }

};

	
const config = {
  //If the file is in the root directory, you can leave it empty. If in another directory, you can write: "/blog". (but no trailing slash)
  "rootDirectory": "",

  
  "API": {

	  /*------ Posts -------*/
	  //Corresponding to folder `./src/client/actions/*`
	  "RECEIVE_DEMO_LIST": "https://restcountries.eu/rest/v2",
	  "RECEIVE_DEMO_LISTDETAIL": "https://restcountries.eu/rest/v2/name/{id}",

	  /*------ Login -------*/
	  "LOGIN_REQUEST": "https://uiux.cc/server/sessions-create.php",
	  "LOGIN_AUTHENTICATE": "https://uiux.cc/server/authenticate.php"

  }


};

module.exports = config;
