import './Table.scss';
const Table = ({ data }) => (
    <div className="table-container">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>RoomID</th>
                <th>Apartment ID</th>
                <th>Status</th>
                <th>Implementer</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.room}</td>
                    <td>{item.aptId}</td>
                    <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
                    <td>{item.implementer}</td>
                    <td>
                        <button className="edit-btn">✏️</button>
                        <button className="delete-btn">🗑️</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default Table;



