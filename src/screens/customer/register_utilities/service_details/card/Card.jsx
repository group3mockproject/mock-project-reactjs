import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Card.scss";
import gym from "@/assets/gym.jpg";
import gym1 from "@/assets/gym1.png";

// eslint-disable-next-line react/prop-types
const Card = ({ title, price, description }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/RegisterUtilities");
    };

    const handleSubscribe = () => {
        navigate("/CustomerEditProfile");
    };

    return (
        <div className="service-details">
            <button className="back-btn" onClick={handleBack}>
                <ArrowBackIcon /> Back
            </button>
            <h1>UTILITIES SERVICES</h1>
            <h2>{title}</h2>
            <p className="price">{price} per month</p>
            <p className="description">{description}</p>

            <div className="images-grid">
                <img src={gym} className="image large" alt="Gym" />
                <img src={gym1} className="image small" alt="Gym 1" />
                <img src={gym1} className="image small" alt="Gym 1" />
            </div>

            <button className="subscribe-btn" onClick={handleSubscribe}>
                <SearchIcon /> Subscribe
            </button>
        </div>
    );
};

export default Card;
