import { useState } from "react";
import Dashboard from "@/screens/apartment_manager/manager_apartment/dashborad/Dashborad.jsx";
import Table from "@/screens/apartment_manager/manager_apartment/table/Table.jsx";
import './ManagerApartment.scss';

const ManagerApartment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([
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
    ]);
    const [newItem, setNewItem] = useState({ room: "", aptId: "", status: "Rented", implementer: "" });

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        const id = data.length + 1;
        setData([...data, { id, ...newItem }]);
        setNewItem({ room: "", aptId: "", status: "Rented", implementer: "" });
        toggleModal();
    };

    return (
        <div>
            <Dashboard />
            <button className="add-btn" onClick={toggleModal}>Thêm mới</button>

            <Table data={data} />

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Thêm mới Apartment</h2>
                        <input
                            type="text"
                            name="room"
                            placeholder="Tên Phòng"
                            value={newItem.room}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="aptId"
                            placeholder="ID Căn hộ"
                            value={newItem.aptId}
                            onChange={handleChange}
                        />
                        {/* Thay thế input bằng select cho trạng thái */}
                        <select
                            name="status"
                            value={newItem.status}
                            onChange={handleChange}
                        >
                            <option value="Rented">Rented</option>
                            <option value="Vacant">Vacant</option>
                            <option value="Repair">Repair</option>
                        </select>
                        <input
                            type="text"
                            name="implementer"
                            placeholder="Người phụ trách"
                            value={newItem.implementer}
                            onChange={handleChange}
                        />
                        <button onClick={handleAdd}>Thêm</button>
                        <button onClick={toggleModal}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManagerApartment;
