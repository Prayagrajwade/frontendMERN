import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Homepage from './components/Homepage' ;
import About from './components/About';
import Login from './components/Login';
import Registration from './components/Registration' ;
import Dashboard from './components/Dashboard';
import './App.css'
import ForgetPassword from './components/ForgetPassword';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgetpass" element={<ForgetPassword />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;



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
