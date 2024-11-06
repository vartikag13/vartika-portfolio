import './index.scss';
import LogoTitle from '../../assets/images/logo-v.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br /> I'm
                    <img src={LogoTitle} alt="Logo of the letter V" />
                    artika
                    <br />
                    web developer
                </h1>
                <h2>Frontend Developer / Baker</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
        </div>
    );
};

export default Home;
