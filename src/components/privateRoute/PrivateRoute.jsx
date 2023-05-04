import React, { useContext } from 'react';
import { AuthContext } from '../../authProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    console.log('loading:',loading);

    return (
        <div>
            {/* {loading && <h1>Loading</h1>} */}
            {(!user && loading) && <h1>loading</h1>}
            {(!user) && <Navigate to={'/login'} replace></Navigate>}
            {user && children};
        </div>
    );
};

export default PrivateRoute;