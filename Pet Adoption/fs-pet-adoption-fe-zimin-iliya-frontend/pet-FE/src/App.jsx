import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/profile";
import Admin from "./pages/Admin";
import PetPage from "./pages/PetPage";
import Home from "./pages/Home";
import Modal from "./pages/Modal";
import background from "./assets/1.jpg";
import Login from "./pages/login";
import ProtectedRoutes from "./RoutesElements/ProtectedRoutes";
import AdminRoutes from "./RoutesElements/AdminRoutes";
import { Search } from "./pages/Search";
import PrivateRoutes from "./RoutesElements/PrivateRoutes";
import { useState } from "react";

function App() {
const handleLogout = () => {
  localStorage.clear();
  window.location.reload();
}
  return (
    <Router>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="pic"
      ></div>
      <div className="navhead">
        <nav className="navleft">
          <Link to="/">Home</Link>
          <Modal />
        </nav>
        <div className="navsearch">
          <input type="text" placeholder="Search" />
          <Link to="/search" className="modalwrap">
            Advanced Search
          </Link>
        </div>
        <nav className="navright">
          <a href="#"  onClick={handleLogout}>Logout</a>
          <Link to="/profile" className="modalwrap" >Profile</Link>
        </nav>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/search" element={<Search />} />
          <Route path="/pet" element={<PetPage />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route
          path="/admin"
          element={
            <AdminRoutes isAdminLoggedIn={false}>
              {" "}
              <Admin />
            </AdminRoutes>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
