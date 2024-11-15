import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.scss';
import WeatherAPI from '../Weather/fetch_weather';

const Layout = () => {
    return (
        <>
            <Navigation />

            <div className="page">
                <WeatherAPI />
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
