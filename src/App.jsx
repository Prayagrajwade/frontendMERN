import './index.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useState } from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ForgetPassword from "./components/ForgetPassword";
import Layout from './Layout.jsx';
import Home from './LandingPage/Home/Home.jsx';
import About from './LandingPage/About/About.jsx';
import Contact from './LandingPage/Contact/Contact.jsx';
import User from './LandingPage/User/User.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import UserProfile from './components/UserProfile.jsx';
import Todo from './components/Todo.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const PublicRoute = ({ element }) => {
    return !isAuthenticated ? element : <Navigate to="/dashboard" />;
  };

  const ProtectedLayout = () => (
    <div className="flex">
      <Sidebar setIsAuthenticated={setIsAuthenticated} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute element={<Layout />} />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userid" element={<User />} />
          <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="register" element={<Registration />} />
          <Route path="forgetpass" element={<ForgetPassword />} />
        </Route>
        <Route path="/" element={<ProtectedRoute element={<ProtectedLayout />} />}>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Todo />} />
          </Route>
          <Route path="profile" element={<UserProfile setIsAuthenticated={setIsAuthenticated} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
