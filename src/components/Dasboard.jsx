import axios from 'axios'
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState([]); // State to store our users

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://backendmern-r876.onrender.com/users'); // Fetch users from our API
                setUsers(response.data); // Update state with fetched users
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    return (
        <div>
            <div>Get current user</div>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}</li> // Display each user's name
                ))}
            </ul>
        </div>
    )
}

export default Dashboard;