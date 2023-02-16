import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    if (!!localStorage.token) return <Outlet />
    return <Navigate to="/" />;
    }
    

export default PrivateRoutes;