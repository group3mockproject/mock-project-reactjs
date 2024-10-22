import './ServiceCard.scss';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, price, description, color, status }) => {
    return (
        <div className={`service-card ${color}`}>
            <div className="icon">
                <i className="fas fa-dumbbell"></i>
            </div>
            <h3>{title}</h3>
            <p>{price} per month</p>
            <p className="description">{description}</p>

            <div className="footer">
                <a href="/customers/RegisterUtilities/ServiceDetails" className="more">More...</a>
                {status !== "1" && (
                    <button className={`subscribe-btn ${color}`}>Subscribe</button>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
