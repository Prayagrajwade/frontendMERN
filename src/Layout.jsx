import Footer from './LandingPage/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Header from './LandingPage/Header/Header.jsx'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout