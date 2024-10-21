import Card from "@/screens/customer/register_utilities/service_details/card/Card.jsx";


function ServiceDetails() {
    const service = {
        title: 'GYM',
        price: '$24',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    };

    return (
        <div className="home">
            <Card {...service} />
        </div>
    );
}

export default ServiceDetails;
