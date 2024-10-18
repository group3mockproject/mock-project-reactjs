import './Table.scss';

const Table = () => (
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
            {[
                { id: 1, room: 'Downtown Plaza', aptId: 201, status: 'Rented', implementer: 'John Doe' },
                { id: 2, room: 'City Square', aptId: 102, status: 'Vacant', implementer: 'Anna Smith' },
                { id: 3, room: 'Ocean View', aptId: 305, status: 'Repair', implementer: 'Maintenance Team' },
                { id: 4, room: 'Skyline Tower', aptId: 410, status: 'Repair', implementer: 'Kevin Jones' },
                { id: 5, room: 'Green Park', aptId: 503, status: 'Rented', implementer: 'Alice Brown' },
                { id: 6, room: 'Harbor Heights', aptId: 204, status: 'Repair', implementer: 'Maintenance Team' },
                { id: 7, room: 'Lakeside Villas', aptId: 110, status: 'Vacant', implementer: 'Emily Davis' },
                { id: 8, room: 'Downtown Plaza', aptId: 211, status: 'Repair', implementer: 'Repair Crew' },
                { id: 9, room: 'City Square', aptId: 402, status: 'Vacant', implementer: 'Anna Smith' },
                { id: 10, room: 'Ocean View', aptId: 309, status: 'Repair', implementer: 'Kevin Jones' },
                { id: 11, room: 'Green Park', aptId: 507, status: 'Rented', implementer: 'Alice Brown' },
            ].map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.room}</td>
                    <td>{item.aptId}</td>
                    <td className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                    </td>
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
