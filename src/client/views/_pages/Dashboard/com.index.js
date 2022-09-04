import React from 'react';
import Authorized from '@/pages/Dashboard/Authorized.js';
import DataList from '@/pages/Dashboard/DataList.js';

export default () => {
    return (
        <>
        <Authorized />

        <div className="alert alert-warning" role="alert">
        Note: The server may prohibit PHP data manipulation, Axios request will not be able to complete the data change.
        </div>        
        <DataList />
        </>
    );
}
	
