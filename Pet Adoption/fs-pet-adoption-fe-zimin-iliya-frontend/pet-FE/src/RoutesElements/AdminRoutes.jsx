import { Navigate } from "react-router-dom";
function AdminRoutes(props) {
    return (
      props.isAdminLoggedIn ?
       props.children:<Navigate to="/profile" />)
  }
export default AdminRoutes;