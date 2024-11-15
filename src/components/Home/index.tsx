import './index.scss';
import LogoTitle from '../../assets/images/logo-v.png';
import Resume from '../../assets/docs/VartikaGupta_Resume.pdf';
import Pic from '../../assets/images/profile.jpg';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br />
                    <span className="no-wrap">
                        I'm <img src={LogoTitle} alt="Logo of the letter V" />
                        artika
                    </span>
                    <br />
                    web developer
                </h1>
                <h2>Frontend Developer / Baker</h2>
                <div className="two-buttons">
                    <a
                        href="mailto:vartikag.13@gmail.com"
                        className="flat-button"
                    >
                        CONTACT ME
                    </a>
                    <a
                        href={Resume}
                        className="flat-button light"
                        target="_blank"
                        rel="noreferrer"
                    >
                        RESUME
                    </a>
                </div>
            </div>
            <div className="profile-pic">
                <img
                    src={Pic}
                    alt="Author at a beach in Thailand"
                    className="profile-pic"
                />
            </div>
        </div>
    );
};

export default Home;
