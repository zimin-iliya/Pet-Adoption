import { Navigate } from "react-router-dom";
function ProtectedRoutes(props) {
  return (
    props.isLoggedIn ?
     props.children:<Navigate to="/" />)
}
export default ProtectedRoutes;