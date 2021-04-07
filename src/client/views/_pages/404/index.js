import React, { Fragment } from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    
    return (
	  <Fragment>
		
            <div className="content">
                <h3>Page Not found</h3>
            </div>
       
        
      </Fragment>
    );
};