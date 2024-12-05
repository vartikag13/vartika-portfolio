import './projectcard.scss';

interface ProjectProps {
    screenshot: string;
    description: string;
    imageAlignment: string;
    projectTileAlignment: string;
    pageHref: string;
}

const Card = ({ screenshot, description, imageAlignment, projectTileAlignment, pageHref }: ProjectProps) => {
    return (
        <div className={projectTileAlignment} onClick={e => console.log({pageHref})}>
        <img src={screenshot} alt='project card' className={imageAlignment}></img>
        <div className='project-info'>

        {description}
            </div>
        </div>
    );
};

export default Card;
