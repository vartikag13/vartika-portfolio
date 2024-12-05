import './index.scss';
import LogoTitle from '../../assets/images/logo-v.png';
import Resume from '../../assets/docs/Vartika_Gupta_Resume.pdf';
import Pic from '../../assets/images/profile.jpg';
import Coin from '../../assets/images/coin.png';
import News from '../../assets/images/news.png';
import Pigeon from '../../assets/images/pigeon-letter.png';
import MailHand from '../../assets/images/mail-letter.png';
import TypingWork from '../../assets/images/typing-work.png';
import ProjectCard from '../ProjectCard/projectcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="container home-page">
            <div className='flex-row mb-20'>
            <div className="text-zone">
                <h1>
                    Hi, <span className="no-wrap">
                        I'm <img src={LogoTitle} className='wiggle-logo' alt="Logo of the letter V" />
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
            <h2>Some of My Work {' '}
            <FontAwesomeIcon icon={faChevronCircleDown} className="icon fade-in-down" /></h2>
            <div className='project-wrapper'>
            <div className='project-column'>
            <ProjectCard
                        description="Rebranding Websites"
                    screenshot={TypingWork}
                        imageAlignment='top-right'
                        projectTileAlignment='project-tile-left'
                        pageHref='/rebrand'
                />
                <ProjectCard
                        description="Blogs"
                    screenshot={News}
                        imageAlignment='top-right'
                        projectTileAlignment='project-tile-left'
                        pageHref='/rebrand'
                    />
                    <ProjectCard
                        description="Ecommerce Campaigns"
                    screenshot={Coin}
                        imageAlignment='top-right'
                        projectTileAlignment='project-tile-left'
                        pageHref='/rebrand'
                    />
            </div>
            <div className='project-column'>
            <ProjectCard
                        description="Re-architecting Legacy Apps"
                    screenshot={Pigeon}
                        imageAlignment='top-left'
                        projectTileAlignment='project-tile-right'
                        pageHref='/rebrand'
                />
                <ProjectCard
                        description="Dashboards"
                    screenshot={MailHand}
                        imageAlignment='bottom-left'
                        projectTileAlignment='project-tile-right'
                        pageHref='/rebrand'
                    />
                    {/* <ProjectCard
                        description="Greener Good Campaign"
                    screenshot={GreenerGood}
                        imageAlignment='bottom-left'
                        projectTileAlignment='project-tile-right'
                        pageHref='/rebrand'
                    /> */}
                </div>
                </div>
            </div>
    );
};

export default Home;
