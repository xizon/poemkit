import { useLocation } from 'react-router-dom';
import customRoutesConfig from '@/router/RoutesConfig.js';
import { rootDirectory, siteUrl } from '@/config/websiteConfig.js';

// Note: Each page cannot use the `siteInfo()` function more than once, 
// and double import `useLocation` will cause an error
const siteInfo = (targetPath, exclude) => {

    let pageTitle = null;

    const siteName = customRoutesConfig[0].routes[0].pageTitle;
    const baseURL = siteUrl + rootDirectory + useLocation().pathname;
    const excludeName = typeof(exclude) === 'undefined' ? null : exclude;

    if (typeof(targetPath) !== 'undefined') {

        //=> PAGE: ...
        if ( typeof(targetPath) === 'string' ) {
            customRoutesConfig[0].routes.some((item, index) => {
                const _path = item.path.replace(`${rootDirectory}`, '');

                // Returns the name of the first character that starts with a slash and is grouped by a slash
                const nestedName = targetPath.replace(/^\/([^\/]*).*$/, '$1');
                if (_path === targetPath ||
                    (_path.indexOf(`/${nestedName}`) >= 0 && _path.indexOf(excludeName) === -1 && _path != "/")
                ) {
                    pageTitle = item.pageTitle;
                    return true;
                }
            });
        }


        //=> PAGE: 404
        if ( targetPath.toString() === '404' ) {
            customRoutesConfig[0].routes.some((item, index) => {
                if (item.status === 404) {
                    pageTitle = item.pageTitle;
                    return true;
                }
            });
        }


    }

	return {
        "siteUrl": siteUrl,
		"siteName": siteName,
        "baseURL": baseURL,
		"pageTitle": pageTitle
	}    
}

export default siteInfo;