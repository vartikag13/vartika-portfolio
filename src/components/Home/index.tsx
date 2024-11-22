import './index.scss';
import LogoTitle from '../../assets/images/logo-v.png';
import Resume from '../../assets/docs/VartikaGupta_Resume.pdf';
import Pic from '../../assets/images/profile.jpg';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <span className="no-wrap">
                        I'm <img src={LogoTitle} alt="Logo of the letter V" />
                        artika
                    </span>

                </h1>
                <h2 className='purple-highlight'>&nbsp;Frontend Developer / Baker&nbsp;</h2>
                Since 2019 I’ve made a living as a Software Engineer, creating world-class digital experiences for humans.<br />
                In that time, I’ve been fortunate to work with excellent people at a few companies and as a consultant.
                <br/><br/>
                I'm amazed at how fast the world is growing in tech and always keen on learning whatever comes my way. <br />
                Having worked on multiple national-level projects, I love to see my code translate designs to real-world websites.

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
                    alt="Author of website"
                    className="profile-pic"
                />
            </div>
        </div>
    );
};

export default Home;
