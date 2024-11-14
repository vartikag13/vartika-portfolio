import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.scss';

const Layout = () => {
    return (
        <>
            <Navigation />
            <div className="page">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
