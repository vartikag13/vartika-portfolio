import './index.scss';
import LogoTitle from '../../assets/images/logo-v.png';
//import ProfilePic from '../../assets/images/profile.png';

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
                <a href="mailto:vartikag.13@gmail.com" className="flat-button">
                    CONTACT ME
                </a>
            </div>
            {/* <div className="carousel-zone flex-mobile">
                <img
                    src={ProfilePic}
                    alt="Author at a beach in Thailand"
                    className="profile-pic"
                />
            </div> */}
        </div>
    );
};

export default Home;
