import React from 'react';

export default ({ id, img, title, email }) => {

    return (
        <>

            <div className="row text-center text-md-start align-items-center">
                <div className="col-lg-2 col-md-2">
                    <img className="rounded mb-3" src={img} alt={title} />
                </div>
                <div className="col-lg-10 col-md-10 justify-content-center">
                    <h4 className="poemkit-spacing--no">{title} (ID:{id})</h4>
                    <span>Email: {email}</span>
                </div>

            </div>
            <hr />


        </>

    );
};