import React, { use, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation} from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); //path location
    //console.log(location.pathname);
    

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    
    if(!user){
        //return <Navigate state={location?.pathname} to='/login'></Navigate>
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;