import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowRight } from 'lucide-react'
function Registration() {
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avtar, setAvtar] = useState([]);
    const [coverImage, setCoverimage] = useState([]);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'https://backendmern-r876.onrender.com/api/v1/users/register',
                { fullname, username, avtar, coverImage, email, password }
            );
            toast.success("This is a toast notification !");
            setMessage(response.data.message);
            // navigate("/login");
            console.log(response.data.message);
        } catch (error) {
            console.error("Error registering in:", error);
            setMessage("An error occurred");
        }
    };

    function handleClick() {
        navigate("/login");
    }

    return (
        <div>
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                            <p className="mt-2 text-base text-gray-600">
                                Already Registerd? <button onClick={handleClick}>Login</button>
                            </p>
                            <form className="mt-8">
                                <div className="space-y-5">

                                    <div>
                                        <label htmlFor="name" className="text-base font-medium text-gray-900">
                                            {' '}
                                            User Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                placeholder="Enter Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="name"
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Full Name{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                placeholder="Enter Fullname"
                                                value={fullname}
                                                onChange={(e) => setFullname(e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="name"
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Email address{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                placeholder="Enter Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="email"
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="file" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Upload Avtar{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="file"
                                                placeholder="Upload Avtar"
                                                value={avtar}
                                                onChange={(e) => setAvtar(e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="email"
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="file" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Upload coverImage{' '}
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="file"
                                                placeholder="Upload Coverimage"
                                                value={coverImage}
                                                onChange={(e) => setCoverimage(e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="email"
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Password{' '}
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                id="password"
                                            ></input>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            onClick={handleSubmit}
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Create Account <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="h-full w-full">
                        <img
                            className="mx-auto h-full w-full rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                            alt=""
                        />
                    </div>
                    {message && <p>{message}</p>}
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                    />

                </div>
            </section>
        </div>
    );
}

export default Registration;


// <div style={{ maxWidth: "500px", margin: "0 auto" }}>
//                 <header style={{ padding: "20px 0px", color: "#224F63" }}>
//                     <h1>Registration</h1>
//                 </header>
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         marginTop: "20px",
//                     }}
//                 >
//                     <input
//                         type="email"
//                         placeholder="Enter Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={{
//                             padding: "20px",
//                             marginBottom: "10px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "16px",
//                         }}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Enter Fullname"
//                         value={fullname}
//                         onChange={(e) => setFullname(e.target.value)}
//                         style={{
//                             padding: "20px",
//                             marginBottom: "10px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "16px",
//                         }}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Enter Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         style={{
//                             padding: "20px",
//                             marginBottom: "10px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "16px",
//                         }}
//                     />
//                     <input
//                         type="file"
//                         placeholder="Upload Avtar"
//                         value={avtar}
//                         onChange={(e) => setAvtar(e.target.value)}
//                         style={{
//                             padding: "20px",
//                             marginBottom: "10px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "16px",
//                         }}
//                     />
//                     <input
//                         type="file"
//                         placeholder="Upload Coverimage"
//                         value={coverImage}
//                         onChange={(e) => setCoverimage(e.target.value)}
//                         style={{
//                             padding: "20px",
//                             marginBottom: "10px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "16px",
//                         }}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Enter Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={{
//                             padding: "20px",
//                             marginBottom: "10px",
//                             border: "1px solid #ccc",
//                             borderRadius: "5px",
//                             fontSize: "16px",
//                         }}
//                     />
//                     <button
//                         onClick={handleSubmit}
//                         style={{
//                             padding: "20px 20px",
//                             backgroundColor: "#0C73A1",
//                             color: "white",
//                             border: "none",
//                             borderRadius: "5px",
//                             cursor: "pointer",
//                             fontSize: "16px",
//                         }}
//                     >
//                         Submit
//                     </button>
//                     <p>
//                         Already Registerd? <button onClick={handleClick}>Login</button>
//                     </p>
//                     {message && <p>{message}</p>}
//                 </div>
//             </div>
