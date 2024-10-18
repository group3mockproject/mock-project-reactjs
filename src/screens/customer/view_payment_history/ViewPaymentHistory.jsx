import "./ViewPaymentHistory.scss";

const ViewPaymentHistory = () => {
    const data = [
        { type: "Service", description: "Monthly Subscription", duration: "30 days", paymentDate: "01/01/2024", endDate: "31/01/2024", price: "$100", status: "Active" },
        { type: "Service", description: "Yearly Subscription", duration: "365 days", paymentDate: "01/01/2024", endDate: "31/12/2024", price: "$1200", status: "Pending" },
        { type: "Product", description: "One-time Purchase", duration: "N/A", paymentDate: "05/01/2024", endDate: "N/A", price: "$500", status: "Completed" },
        { type: "Subscription", description: "Weekly Plan", duration: "7 days", paymentDate: "07/01/2024", endDate: "14/01/2024", price: "$50", status: "Active" },
        { type: "Service", description: "Quarterly Subscription", duration: "90 days", paymentDate: "15/01/2024", endDate: "15/04/2024", price: "$300", status: "Pending" },
        { type: "Product", description: "Lifetime Access", duration: "Unlimited", paymentDate: "20/01/2024", endDate: "N/A", price: "$2000", status: "Completed" },
        { type: "Service", description: "Monthly Subscription", duration: "30 days", paymentDate: "22/01/2024", endDate: "21/02/2024", price: "$100", status: "Active" },
        { type: "Subscription", description: "Weekly Plan", duration: "7 days", paymentDate: "25/01/2024", endDate: "01/02/2024", price: "$50", status: "Active" },
        { type: "Product", description: "One-time Purchase", duration: "N/A", paymentDate: "28/01/2024", endDate: "N/A", price: "$300", status: "Pending" },
        { type: "Service", description: "Yearly Subscription", duration: "365 days", paymentDate: "01/02/2024", endDate: "31/01/2025", price: "$1200", status: "Pending" }
    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Payment date</th>
                    <th>End date</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.description}</td>
                        <td>{item.duration}</td>
                        <td>{item.paymentDate}</td>
                        <td>{item.endDate}</td>
                        <td>{item.price}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewPaymentHistory;
