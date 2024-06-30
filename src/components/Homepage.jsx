import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
                Welcome to our app
            </h1>
            <nav className="space-y-4">
                {isAuthenticated ? (
                    <div className="flex flex-col items-center space-y-2">
                        <Link 
                            to="/dashboard" 
                            className="text-blue-500 hover:text-blue-700 text-xl"
                        >
                            Go to Dashboard
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-blue-500 hover:text-blue-700 text-xl"
                        >
                            About
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-2">
                        <Link 
                            to="/login" 
                            className="text-blue-500 hover:text-blue-700 text-xl"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/register" 
                            className="text-blue-500 hover:text-blue-700 text-xl"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Home;






// import { Link } from 'react-router-dom';

// const Home = ({ isAuthenticated }) => {
//     return (
//         <div>
//             <h1>Welcome to our app</h1>
//             <nav>
//                 {isAuthenticated ? (
//                     <div>
//                         <Link to="/dashboard">
//                             Go to Dashboard
//                         </Link>
//                         <br />
//                         <Link to="/about">
//                             About
//                         </Link>
//                     </div>
//                 ) : (
//                     <div>
//                         <Link to="/login">Login</Link>
//                         <br />
//                         <Link to="/register">Sign Up</Link>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// };

// export default Home;
