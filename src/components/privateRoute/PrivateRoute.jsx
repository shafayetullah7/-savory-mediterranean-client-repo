import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log('loading:',loading);
    const location = useLocation();
    console.log(location);

    return (
        <div>
            {/* {loading && <h1>Loading</h1>} */}
            {/* {(!user) && <h1>loading</h1>} */}
            {(!user) && <Navigate to={'/login'} state={{from:location}} replace></Navigate>}
            {user && children}
        </div>
    );
};

export default PrivateRoute;