import { useState } from "react";
import "./ViewPaymentHistory.scss";

const ViewPaymentHistory = () => {
    const [data, setData] = useState([
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
    ]);

    const [editItem, setEditItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({
        type: "", description: "", duration: "", paymentDate: "", endDate: "", price: "", status: "Active"
    });

    const handleDelete = (index) => setData(data.filter((_, i) => i !== index));
    const handleEdit = (index) => setEditItem({ ...data[index], index });

    const handleSave = () => {
        const updatedData = [...data];
        updatedData[editItem.index] = { ...editItem };
        setData(updatedData);
        setEditItem(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditItem((prev) => ({ ...prev, [name]: value }));
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleNewItemChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddNewItem = () => {
        setData([...data, newItem]);
        setNewItem({ type: "", description: "", duration: "", paymentDate: "", endDate: "", price: "", status: "Active" });
        toggleModal();
    };

    return (
        <div className="table-container">
            <button className="add-btn" onClick={toggleModal}>Thêm mới</button>
            <table>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Payment Date</th>
                    <th>End Date</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {editItem && editItem.index === index ? (
                            <>
                                {["type", "description", "duration", "paymentDate", "endDate", "price"].map((field) => (
                                    <td key={field}>
                                        <input
                                            type="text"
                                            name={field}
                                            value={editItem[field]}
                                            onChange={handleChange}
                                        />
                                    </td>
                                ))}
                                <td>
                                    <select
                                        name="status"
                                        value={editItem.status}
                                        onChange={handleChange}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={handleSave}>Save</button>
                                    <button onClick={() => setEditItem(null)}>Cancel</button>
                                </td>
                            </>
                        ) : (
                            <>
                                <td>{item.type}</td>
                                <td>{item.description}</td>
                                <td>{item.duration}</td>
                                <td>{item.paymentDate}</td>
                                <td>{item.endDate}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <td className="actions">
                                    <button className="edit-btn" onClick={() => handleEdit(index)}>✏️</button>
                                    <button className="delete-btn" onClick={() => handleDelete(index)}>🗑️</button>
                                </td>
                            </>
                        )}
                    </tr>
                ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Thêm mới Payment</h2>
                        {["type", "description", "duration", "paymentDate", "endDate", "price"].map((field) => (
                            <input
                                key={field}
                                type="text"
                                name={field}
                                placeholder={`Nhập ${field}`}
                                value={newItem[field]}
                                onChange={handleNewItemChange}
                            />
                        ))}
                        <select
                            name="status"
                            value={newItem.status}
                            onChange={handleNewItemChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button onClick={handleAddNewItem}>Thêm</button>
                        <button onClick={toggleModal}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewPaymentHistory;



