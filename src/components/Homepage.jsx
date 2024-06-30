import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
    return (
        <div>
            <h1>Welcome</h1>
            <nav>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard">Go to Dashboard</Link>
                        <br />
                        <Link to="/about">About</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <br />
                        <Link to="/register">Sign Up</Link>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Home;
