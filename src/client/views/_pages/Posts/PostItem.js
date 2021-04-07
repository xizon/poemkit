import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default ({ name, flag })  => {
    
    return (
	  <Fragment>
		
          <div style={{padding: "10px 10px 0 10px", margin: "10px", display: "inline-block", border: "1px solid #ddd", width: "120px", height: "120px", textAlign: "center", position: "relative"}}>
            <NavLink to={`/posts/${name}`} className="item">
                <img src={flag} alt="" style={{width: "100px", height: "80px",  display: "inline-block" }} />
                <h4 style={{position:"absolute", background:"rgba(0, 0, 0, .8)", bottom:"0", left:"0", color:"#fff", padding:"5px", fontSize:"12px", overflow:"hidden", textOverflow:"ellipsis", width:"calc(100% - 10px)", whiteSpace:"nowrap", margin: "0"}}>{name}</h4>
            </NavLink>

          </div>
          
      </Fragment>

    );
};