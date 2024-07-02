import { Outlet } from 'react-router-dom'
import NavBar from './UserRecord/NavBar.jsx';

function LayoutProtected() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default LayoutProtected;