import "./ViewFinesList.scss"
import ReactPaginate from 'react-paginate';
import {useState} from "react";

const ViewFinesList = () => {
    const fines = [
        { name: "Parking violation", date: "08-10-2024", amount: "$5", status: "Unpaid" },
        { name: "Late payment of service fees", date: "08-10-2024", amount: "$50", status: "Unpaid" },
        { name: "Noise disturbance at night", date: "08-10-2024", amount: "$10", status: "Paid" },
        { name: "Security or common area violation", date: "08-10-2024", amount: "$50", status: "Paid" },
        { name: "Unauthorized repairs/alterations", date: "08-10-2024", amount: "$20", status: "Paid" },
        { name: "Improper garbage disposal", date: "08-10-2024", amount: "$25", status: "Paid" },
        { name: "Parking violation", date: "08-10-2024", amount: "$5", status: "Unpaid" },
        { name: "Late payment of service fees", date: "08-10-2024", amount: "$50", status: "Unpaid" },
        { name: "Noise disturbance at night", date: "08-10-2024", amount: "$10", status: "Paid" },
        { name: "Security or common area violation", date: "08-10-2024", amount: "$50", status: "Paid" },
    ];

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = fines.slice(offset, offset + itemsPerPage);

    const totalFine = fines
        .filter((fine) => fine.status === "Unpaid")
        .reduce((total, fine) => total + parseInt(fine.amount.replace('$', '')), 0);

    return (
        <div className="fines-layout">
            <div className="fines-table-container">
                <h2>My Fines List</h2>
                <div className="filter-controls">
                    <div className="filter-item">
                        <input type="date" className="date-picker"/>
                    </div>
                    <div className="filter-item">
                        <select className="status-filter">
                            <option value="all">ALL</option>
                            <option value="paid">Paid</option>
                            <option value="unpaid">Unpaid</option>
                        </select>
                    </div>
                </div>


                <table className="fines-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Violation Name</th>
                        <th>Date of Violation</th>
                        <th>Fine Amount</th>
                        <th>Payment Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((fine, index) => (
                        <tr key={index}>
                            <td><input type="checkbox"/></td>
                            <td>{fine.name}</td>
                            <td>{fine.date}</td>
                            <td>{fine.amount}</td>
                            <td>
                  <span className={`status ${fine.status === "Paid" ? "paid" : "unpaid"}`}>
                    {fine.status}
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <ReactPaginate
                    previousLabel={"←"}
                    nextLabel={"→"}
                    pageCount={Math.ceil(fines.length / itemsPerPage)}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>

            <div className="payment-summary">
                <h3>Payment</h3>
                <p>Total: <span className="total-amount">${totalFine}</span></p>
                <button className="pay-all-btn">Pay all</button>
            </div>
        </div>
    );
};

export default ViewFinesList;
