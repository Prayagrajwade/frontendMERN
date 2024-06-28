import { useNavigate, Link } from "react-router-dom";

const Dashboard = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
