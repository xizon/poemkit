import App from '@poemkit/router/App.js';
//
import Home from '@poemkit/pages/Home/index.js';
import Posts from '@poemkit/pages/Posts/index.js';
import PostDetail from '@poemkit/pages/Posts/PostDetail.js';
import PostsPagination from '@poemkit/pages/PostsPagination/index.js';
import Member from '@poemkit/pages/Member/index.js';
import NoMatch from '@poemkit/pages/404/index.js';
import NestedRoutes from '@poemkit/pages/NestedRoutes/index.js';
import ComponentsDemo from '@poemkit/pages/ComponentsDemo/index.js';
import Admin from '@poemkit/pages/Admin/index.js';



const routesConfig = [
  {
    component: App,
    routes: [


      /*======================================== */
      /* Homepage */

      {
        path: "/",
        component: Home,
        exact: true,
        pageTitle: 'PoemKit'
      },

      {
        path: "/index",
        component: Home,
        pageTitle: 'PoemKit'
      },


      /*======================================== */
      /* Primary Menu */

      {
        path: "/components-demo",
        component: ComponentsDemo,
        pageTitle: 'Components Demo'
      },

      /* 
      important!! 
        Fixed: Nested routes not working
        Add a new route of /posts/:post_id and add an "exact" property to the current route: 
      */

      {
        path: "/posts",
        component: Posts,
        pageTitle: 'Posts',
        exact: true
      },
      {
        path: "/posts/:post_id",
        component: PostDetail,
        pageTitle: ''
      },
      {
        path: "/member",
        component: Member,
        pageTitle: 'Member'
      },
      {
        path: "/posts-pagination/:page_number",
        component: PostsPagination,
        pageTitle: 'Posts Pagination'
      },
      {
        path: "/admin",
        component: Admin,
        pageTitle: 'Admin'
      },


      /* In order to make nested routes valid, do not add the exact attribute here */
      {
        path: "/nested-routes",
        component: NestedRoutes,
        pageTitle: 'Nested Routes',
      },


      /* 404 */
      {
        path: "*",
        component: NoMatch,
        pageTitle: '404 Error',
        status: 404
      },

    ]
  }
];

export default routesConfig;
