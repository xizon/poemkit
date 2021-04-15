import App from '@uixkit.react/router/App.js';
//
import Home from '@uixkit.react/pages/Home/index.js';
import Posts from '@uixkit.react/pages/Posts/index.js';
import PostDetail from '@uixkit.react/pages/Posts/PostDetail.js';
import Todos from '@uixkit.react/pages/Todos/index.js';
import NoMatch from '@uixkit.react/pages/404/index.js';
import NestedRoutes from '@uixkit.react/pages/NestedRoutes/index.js';


const routesConfig = [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
		pageTitle: 'Home'
      },
		
      {
        path: "/index",
        component: Home,
		pageTitle: 'Home'
      },

	/* 
	important!! 
		Fixed: Nested routes not working
		Add a new route of /posts/:post_id and add an `exact` property to the current route: 
	*/
		
      {
        path: "/posts",
        component: Posts,
		pageTitle: 'Posts',
		exact: true
      },
      {
        path: '/todos',
        component: Todos,
		pageTitle: 'Todos'
      },
  
      {
        path: '/posts/:post_id',
        component: PostDetail,
		pageTitle: ''
      },	
		
	  /* In order to make nested routes valid, do not add the exact attribute here */
	  {
        path: '/nested-routes',
        component: NestedRoutes,
		pageTitle: 'Nested Routes',
      },	
      {
        path: '*',
        component: NoMatch,
		pageTitle: '404 Error',
		status: 404
      }  	
		
    ]
  }
];

export default routesConfig;