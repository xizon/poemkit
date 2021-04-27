module.exports = {
  //If the file is in the root directory, you can leave it empty. If in another directory, you can write: "/blog". (but no trailing slash)
  "rootDirectory": "",
	
  //Corresponding to folder `./src/client/actions/*`
  "API": {
	  "RECEIVE_DEMO_LIST": "https://restcountries.eu/rest/v2",
	  "RECEIVE_DEMO_LISTDETAIL": "https://restcountries.eu/rest/v2/name/{id}"
	  //"RECEIVE_DEMO_LIST": "../../assets/json/Posts.json",
	  //"RECEIVE_DEMO_LISTDETAIL": "../../assets/json/PostDetail.json"
  }
	
	
};