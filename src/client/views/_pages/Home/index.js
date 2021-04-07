import React, { Fragment } from 'react';
import Button from '../../../components/Buttons/index.js';

let spreadOperator = {
  bgColor: 'info',
  btnName: 'Spread Operator',
};


export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    
    return (
	  <Fragment>
		
            <div className="content">
                <h1>Home!</h1>
		
		        <h3>Buttons:</h3>
				<Button bgColor='' btnName=''/>
				<Button bgColor='success' btnName='success'/>
				<Button bgColor='info' btnName='info'/>
				<Button bgColor='danger' btnName='danger'/>
				<Button bgColor='warning' btnName='warning'/>
				<Button {...spreadOperator}/>
            </div>
       
        
      </Fragment>
    );
};