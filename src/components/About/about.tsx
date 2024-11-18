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

const About = () => {
    return (
        <div className="container about-section">
            <div className="bakery-text-zone">
                <h1 className="mb-20">
                    Know Who <strong className="purple">I Am</strong>
                </h1>
                <div>
                    I'm an experienced <strong>Software Engineer</strong>
                </div>
                building and managing Websites and Web Applications that leads
                to the success of the overall product.
                <br />
                <br />
                I'm open to new opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience{' '}
                <div>
                    then don't hesitate to
                    <strong> contact</strong> me.
                </div>
            </div>
            <div className="flex-mobile">
                <div>
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
                <div>
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
            </div>
        </div>
    );
};

export default About;
