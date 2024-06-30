import { Link } from 'react-router-dom';

const Homepage = ({ isAuthenticated }) => {
    return (
        <div>
            <h1>Welcome to our app</h1>
            <nav>
                {isAuthenticated ? (
                    <div>
                        <Link to="/dashboard">
                            Go to Dashboard
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/">Layout</Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Homepage;
