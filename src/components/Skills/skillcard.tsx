import './skillcard.scss';

interface CardProps {
    logo: JSX.Element;
    description: string;
}

const Card = ({ logo, description }: CardProps) => {
    return (
        <div className="logo-card bounce-in mb-0">
            {logo}
            {description}
        </div>
    );
};

export default Card;
