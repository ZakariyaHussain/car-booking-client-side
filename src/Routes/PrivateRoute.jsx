import React from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate} from 'react-router';

const PrivateRoute = ({ children }) => {
    // const { user, loading } = use(AuthContext);
    // const location = useLocation(); //path location
    //console.log(location.pathname);
    

    // if(loading){
    //     return <span className="loading loading-spinner loading-xl"></span>
    // }
    
    // if(!user){
    //     return <Navigate state={location?.pathname} to='/login'></Navigate>
    // }
    return children;
};

export default PrivateRoute;