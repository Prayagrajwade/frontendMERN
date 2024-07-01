import { useNavigate } from "react-router-dom";
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, LogOut } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Logout successfully!");
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                            href="#"
                        >
                            <BarChart className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Dashboard</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Wallet className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Sales</span>
                        </a>
                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Newspaper className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Blogs</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <BellRing className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Notifications</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Paperclip className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Checklists</span>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Brush className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Themes</span>
                        </a>
                        <button
                            onClick={handleLogout}
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700">
                            <LogOut className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Logout</span>
                        </button>
                        <ToastContainer
                            position="top-center"
                            autoClose={2000}
                        />
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Dashboard;


//<div>
// <h1>Dashboard</h1>
// <button onClick={handleLogout}>Logout</button>
// </div>