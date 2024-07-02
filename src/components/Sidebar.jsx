import { useNavigate, NavLink } from "react-router-dom";
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, LogOut } from 'lucide-react';
// import axios from "axios";

const Sidebar = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
                localStorage.removeItem("token");
                setIsAuthenticated(false);
                navigate("/");
            };

    return (
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
                        <NavLink
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                            to="/dashboard"
                        >
                            <BarChart className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Dashboard</span>
                        </NavLink>
                        <NavLink
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            to="/profile"
                        >
                            <Wallet className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Profile</span>
                        </NavLink>
                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
                        <NavLink
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            to="#"
                        >
                            <Newspaper className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Blogs</span>
                        </NavLink>
                        <NavLink
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            to="#"
                        >
                            <BellRing className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Notifications</span>
                        </NavLink>
                        <NavLink
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            to="#"
                        >
                            <Paperclip className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Checklists</span>
                        </NavLink>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
                        <NavLink
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            to="#"
                        >
                            <Brush className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Themes</span>
                        </NavLink>
                        <button
                            onClick={handleLogout}
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <LogOut className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Logout</span>
                        </button>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;





// import { useNavigate } from "react-router-dom";
// import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, LogOut } from 'lucide-react'
// import axios from "axios";

// const Dashboard = ({ setIsAuthenticated }) => {
//     const navigate = useNavigate();

//     // const handleLogout = () => {
//     //     localStorage.removeItem("token");
//     //     setIsAuthenticated(false);
//     //     navigate("/");
//     // };

//     const handleLogout = async (e) => {
//         e.preventDefault();
//             const response = await axios.post(
//                 "https://backendmern-r876.onrender.com/api/v1/users/logout");
//             setIsAuthenticated(false);
//             navigate("/");
//             console.log(response.data.message);
//     };

//     return (
//         <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
//             <div className="mt-6 flex flex-1 flex-col justify-between">
//                 <nav className="-mx-3 space-y-6 ">
//                     <div className="space-y-3 ">
//                         <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
//                         <a
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
//                             href="#"
//                         >
//                             <BarChart className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Dashboard</span>
//                         </a>
//                         <a
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//                             href="#"
//                         >
//                             <Wallet className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Sales</span>
//                         </a>
//                     </div>
//                     <div className="space-y-3 ">
//                         <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
//                         <a
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//                             href="#"
//                         >
//                             <Newspaper className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Blogs</span>
//                         </a>
//                         <a
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//                             href="#"
//                         >
//                             <BellRing className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Notifications</span>
//                         </a>
//                         <a
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//                             href="#"
//                         >
//                             <Paperclip className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Checklists</span>
//                         </a>
//                     </div>

//                     <div className="space-y-3 ">
//                         <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
//                         <a
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
//                             href="#"
//                         >
//                             <Brush className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Themes</span>
//                         </a>
//                         <button
//                             onClick={handleLogout}
//                             className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
//                             <LogOut className="h-5 w-5" aria-hidden="true" />
//                             <span className="mx-2 text-sm font-medium">Logout</span>
//                         </button>
//                     </div>
//                 </nav>
//             </div>
//         </aside>
//     );
// };

// export default Dashboard;


//<div>
// <h1>Dashboard</h1>
// <button onClick={handleLogout}>Logout</button>
// </div>