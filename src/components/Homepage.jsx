import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) => {
    return (
        <div>
            <h1>Welcome to our app</h1>
            <nav>
                {isAuthenticated ? (
                    <div>
                        <Link to="/dashboard">
                            Go to Dashboard
                        </Link>
                        <br />
                        <Link to="/about">
                            About
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/login">Login</Link>
                        <br />
                        <Link to="/register">Sign Up</Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Home;
