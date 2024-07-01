import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://backendmern-r876.onrender.com/api/v1/users/login",
                {
                    email,
                    password,
                }
            );
            setIsAuthenticated(true);
            toast.success("Login successful!");
            setMessage(response.data.message);
            navigate("/dashboard");
            console.log(response.data.message);
        } catch (error) {
            console.error("Login failed", error);
            toast.error("Incorrect email or password!");
            setMessage("Incorrect email or password."); // Display appropriate error message
        }
    };

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full rounded-md object-cover object-top"
                            src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt=""
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="relative">
                        <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                            <h3 className="text-4xl font-bold text-white">
                                Now you dont have to rely on your designer to create a new page
                            </h3>
                            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                <li className="flex items-center space-x-3">
                                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                        <svg
                                            className="h-3.5 w-3.5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-medium text-white"> Commercial License </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                        <svg
                                            className="h-3.5 w-3.5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-medium text-white"> Unlimited Exports </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                        <svg
                                            className="h-3.5 w-3.5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-medium text-white"> 120+ Coded Blocks </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                        <svg
                                            className="h-3.5 w-3.5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-lg font-medium text-white"> Design Files Included </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Not registered?{" "}
                            <button onClick={handleRegister} className="text-blue-600 hover:underline">
                                Register
                            </button>
                        </p>

                        <form onSubmit={handleLogin} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            type="text"
                                            placeholder="Enter Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        Get started <ArrowRight className="ml-2" size={16} />
                                    </button>
                                </div>
                                {message && <p className="mt-2 text-red-500">{message}</p>}
                            </div>
                        </form>
                        <ToastContainer
                            position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ArrowRight } from 'lucide-react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Login = ({ setIsAuthenticated }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 "https://backendmern-r876.onrender.com/api/v1/users/login",
//                 {
//                     email,
//                     password,
//                 }
//             );
//             setIsAuthenticated(true);
//             toast.success("Login successfully!");
//             setMessage(response.data.message);
//             navigate("/dashboard");
//             console.log(response.data.message);
//         } catch (error) {
//             console.error("Login failed", error);
//             toast.error("Provide correct email!");
//             setMessage("Incorrect email or password."); // Display appropriate error message
//         }
//     };

//     function handleRegister() {
//         navigate("/register");
//     }

//     return (
//         <section>
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//                 <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
//                     <div className="absolute inset-0">
//                         <img
//                             className="h-full w-full rounded-md object-cover object-top"
//                             src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//                             alt=""
//                         />
//                     </div>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
//                     <div className="relative">
//                         <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
//                             <h3 className="text-4xl font-bold text-white">
//                                 Now you dont have to rely on your designer to create a new page
//                             </h3>
//                             <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
//                                 <li className="flex items-center space-x-3">
//                                     <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
//                                         <svg
//                                             className="h-3.5 w-3.5 text-white"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                             fill="currentColor"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                 clipRule="evenodd"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                     <span className="text-lg font-medium text-white"> Commercial License </span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
//                                         <svg
//                                             className="h-3.5 w-3.5 text-white"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                             fill="currentColor"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                 clipRule="evenodd"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                     <span className="text-lg font-medium text-white"> Unlimited Exports </span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
//                                         <svg
//                                             className="h-3.5 w-3.5 text-white"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                             fill="currentColor"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                 clipRule="evenodd"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                     <span className="text-lg font-medium text-white"> 120+ Coded Blocks </span>
//                                 </li>
//                                 <li className="flex items-center space-x-3">
//                                     <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
//                                         <svg
//                                             className="h-3.5 w-3.5 text-white"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                             fill="currentColor"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                                 clipRule="evenodd"
//                                             ></path>
//                                         </svg>
//                                     </div>
//                                     <span className="text-lg font-medium text-white"> Design Files Included </span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
//                     <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
//                         <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
//                         <p className="mt-2 text-sm text-gray-600">

//                             {" "}
//                             Not registered?
//                             <button onClick={handleRegister}>Register</button>
//                         </p>

//                         <form onSubmit={handleLogin} className="mt-8">
//                             <div className="space-y-5">
//                                 <div>
//                                     <label htmlFor="" className="text-base font-medium text-gray-900">
//                                         {' '}
//                                         Email address{' '}
//                                     </label>

//                                     <div className="mt-2">
//                                         <input
//                                             type="text"
//                                             placeholder="Enter Email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                         ></input>
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <div className="mt-2">
//                                         <input
//                                             type="password"
//                                             placeholder="Enter Password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
//                                         ></input>
//                                     </div>

//                                 </div>

//                                 <div>
//                                     <button
//                                         type="submit"
//                                         className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
//                                     >
//                                         Get started <ArrowRight className="ml-2" size={16} />
//                                     </button>
//                                 </div>
//                                 {message && <p>{message}</p>}
//                             </div>
//                         </form>
//                         <ToastContainer
//                             position="top-center"
//                             autoClose={3000}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Login;