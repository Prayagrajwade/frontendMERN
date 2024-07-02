import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Dashboard from './components/Dasboard.jsx';
import UserProfile from './components/UserProfile.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const PublicRoute = ({ element }) => {
    return !isAuthenticated ? element : <Navigate to="/dashboard" />;
  };

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
        <Route path="sidebar" element={<ProtectedRoute element={<Sidebar setIsAuthenticated={setIsAuthenticated} />} />} />
        <Route path="dashboard" element={<ProtectedRoute element={<Dashboard setIsAuthenticated={setIsAuthenticated} />} />} />
        <Route path="profile" element={<ProtectedRoute element={<UserProfile setIsAuthenticated={setIsAuthenticated}/>} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;








// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import { useEffect, useState } from "react";
// // import Homepage from "./components/Homepage";
// // import About from "./components/About";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import Dashboard from "./components/Dashboard";
// import ForgetPassword from "./components/ForgetPassword";
// import Layout from './Layout.jsx'
// import Home from './LandingPage/Home/Home.jsx'
// import About from './LandingPage/About/About.jsx'
// import Contact from './LandingPage/Contact/Contact.jsx'
// import User from './LandingPage/User/User.jsx'
// import Github,{githubInfoLoader} from './LandingPage/Github/Github.jsx'

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={<Layout isAuthenticated={isAuthenticated} />}
//           />
//           <Route path='' element={<Home />} />
//           <Route
//             path="/login"
//             element={<Login setIsAuthenticated={setIsAuthenticated} />}
//           />
//           <Route path="/register" element={<Registration />} />
//           <Route path="/forgetpass" element={<ForgetPassword />} />
//           <Route path='about' element={<About />} />
//           <Route path='contact' element={<Contact />} />
//           <Route path='user/:userid' element={<User />} />
//           <Route 
//           loader={githubInfoLoader}
//           path='github' 
//           element={<Github />}
//             />
//           <Route
//             path="/dashboard"
//             element={
//               isAuthenticated ? (
//                 <Dashboard setIsAuthenticated={setIsAuthenticated} />
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />
//           <Route
//             path="/about"
//             element={isAuthenticated ? <About /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

//****************** With auth *********************/

// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//************* Without auth **************************/

// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Homepage from './components/Homepage'
// import Login from './components/Login'
// import Registration from './components/Registration'

// function App() {

//   return (
//     <div className='app'>
//       <Routes>
//         <Route path="/" element={<Homepage/>} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/register" element={<Registration/>} />
//       </Routes>
//     </div>
//   )
// }

// export default App
