import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

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