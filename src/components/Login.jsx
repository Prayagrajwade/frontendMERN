import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    function handleRegister() {
        navigate("/register")
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8000/api/v1/users/login",
                { email, password }
            );
            setIsAuthenticated(true);
            setMessage(response.data.message);
            navigate("/dashboard");
            console.log(response.data.message);
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <header style={{ color: "#224F63" }}>
                <h1>Login</h1>
            </header>
            <form onSubmit={handleLogin}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "20px",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            padding: "20px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "16px",
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            padding: "20px",
                            marginBottom: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            fontSize: "16px",
                        }}
                    />
                    <button type="submit">Login</button>
                    <p> Not register?
                        <button onClick={handleRegister}>Register</button>  
                    </p>
                    {message && <p>{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;

// import { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');

//     const navigate = useNavigate();

//         function handleRegister() {
//         navigate("/register")
//     }

//     const handleSubmit = async () => {
//         try {
//             const response =
//                 await axios.post('http://localhost:8000/api/v1/users/login',
//                     { email, password });
//             setMessage(response.data.message);
//             history.push('/dashboard');
//         } catch (error) {
//             console.error('Error logging in:', error);
//             setMessage('An error occurred');
//         }
//     };

//     return (
//         <div style={{ maxWidth: '500px', margin: '0 auto' }}>
// <header style={{ padding: '20px 0px', color: "#224F63" }}>
//     <h1>Login</h1>
// </header>
// <div style={
//     {
//         display: 'flex',
//         flexDirection: 'column',
//         marginTop: '20px'
//     }}>
// <input
//     type='text'
//     placeholder='Enter Username'
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     style={
//         {
//             padding: '20px',
//             marginBottom: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '16px'
//         }}
// />
// <input
//     type='password'
//     placeholder='Enter Password'
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     style={
//         {
//             padding: '20px',
//             marginBottom: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             fontSize: '16px'
//         }}
// />
//                 <button
//                     onClick={handleSubmit}
//                     style={
//                         {
//                             padding: '20px 20px',
//                             backgroundColor: '#0C73A1',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '5px',
//                             cursor: 'pointer',
//                             fontSize: '16px'
//                         }}>
//                     Submit
//                 </button>
//                 <p>Not Registerd? <button onClick={handleRegister}>Register</button></p>
//                 {message && <p>{message}</p>}
//             </div>
//         </div>
//     );
// }

// export default Login;
