import './about.scss';
import Card from '../Skills/skillcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3,
    faHtml5,
    faJava,
    faJs,
    faNodeJs,
    faPython,
    faReact,
    faWordpress
} from '@fortawesome/free-brands-svg-icons';
import Nespresso from '../../assets/images/nespresso.png';
import Coffee from '../../assets/images/coffee.png';
import Thailand from '../../assets/images/thailand.png';
import France from '../../assets/images/france.png';
import BreadSticker from '../../assets/images/bread-sticker.png';
// @ts-expect-error
import PickleBall from '../../assets/images/pickleball.mp4';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';


const About = () => {
    return (
        <div className="container about-section">
            <div className="text-zone">
                <h1 className="mb-20">
                    Know Who <strong className="purple-highlight">&nbsp;I Am &nbsp;</strong>
                </h1>
                    I'm an experienced <strong>Software Engineer </strong>
                building and managing Websites and Web Applications that leads
                to the success of the overall product.
                <br />
                I'm open to new opportunities where I can contribute, learn and
                grow. <br/>These are some of the things I enjoy coding with - 
            </div>
                <div className='flex-mobile'>
                    
                
                <Card
                        description="JavaScript"
                        logo={<FontAwesomeIcon icon={faJs} className="icon" />}
                    />
                    <Card
                        description="NodeJS"
                        logo={
                            <FontAwesomeIcon icon={faNodeJs} className="icon" />
                        }
                    />

                    <Card
                        description="HTML"
                        logo={
                            <FontAwesomeIcon icon={faHtml5} className="icon" />
                        }
                    />
                    <Card
                        description="CSS"
                        logo={
                            <FontAwesomeIcon icon={faCss3} className="icon" />
                        }
                    />
                    </div>
                <div className='flex-mobile'>
                    <Card
                        description="React"
                        logo={
                            <FontAwesomeIcon icon={faReact} className="icon" />
                        }
                    />
                    <Card
                        description="Java"
                        logo={
                            <FontAwesomeIcon icon={faJava} className="icon" />
                        }
                    />
                    <Card
                        description="Python"
                        logo={
                            <FontAwesomeIcon icon={faPython} className="icon" />
                        }
                    />
                    <Card
                        description="WordPress"
                        logo={
                            <FontAwesomeIcon
                                icon={faWordpress}
                                className="icon"
                            />
                        }
                    />
            </div>
            <div className='facts'>

                <h2>Other Than That {' '}
                <FontAwesomeIcon icon={faChevronCircleDown} className="icon fade-in-down" /></h2>
                <ul>
                    <li>
                <strong className="purple-highlight">&nbsp;I like travelling!&nbsp;</strong> I have been to 7 countries so far. Which includes Thailand, USA, Canada, India,
                France, Italy and Cuba. All of these trips have been spontaneous and were planned within a week of travelling date. May the future hold more such trips~
                
                    </li>
                    
                    <li>
                        <strong className="purple-highlight">&nbsp;I like baking!&nbsp;</strong> My love for baking started while searching for a new hobby.
                        After many half-cooked breads baked in my crooked pan, I finally perfected this art. Or so I think - you be the judge!
                        Check out my page,  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/the_crooked_pan/?igsh=MXZza213ZnExaGtkYg%3D%3D&utm_source=qr"
                    className="flat-button purple-link"
                >
                     The Crooked Pan!
                </a>
                        
                    </li>
                    <li>
                        <strong className="purple-highlight">&nbsp;I like pickleball!&nbsp;</strong> 
                        I tried to be good at tennis and that didn't go all that well. So I picked the next best thing! Hey, I know it is too mainstream BUT
                        I get the hype. It is easy to get started with and so fun to play. And burns off way more calories than running, another reason to avoid running - added.
                    </li>
                    <li>
                        <strong className="purple-highlight">&nbsp;I like coffee!&nbsp;</strong> 
                        I enjoy a nice cup of freshly brewed coffee, especially when it's cold outside. I got a Nespresso machine (not sponsered) in 2023
                        and have been using it almost every day since. My review for the machine - it is definitely worth the price tag. And girl math makes me believe
                        that I am eventually saving money by not buying it from outside.
                    </li>
                </ul>
                <div className='fact-pictures-section'>
                <img
                    src={France}
                    alt="Author of website"
                    className="fact-pic"
                    />
                    
                    <img
                    src={BreadSticker}
                    alt="Author of website"
                    className="fact-pic"
                    />
                    <img
                    src={Coffee}
                    alt="Author of website"
                    className="fact-pic"
                    />
                    <img
                    src={Nespresso}
                    alt="Author of website"
                    className="fact-pic"
                    />
                    <img
                    src={Thailand}
                    alt="Author of website"
                    className="fact-pic"
                    />
    
                </div>
                <video src={PickleBall} className='video-container' loop controls></video>
            </div>
            </div>
    );
};

export default About;
