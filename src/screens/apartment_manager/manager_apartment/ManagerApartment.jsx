import "./ManagerApartment.scss";
import Dashboard from "@/screens/apartment_manager/manager_apartment/dashborad/Dashborad.jsx";
import Table from "@/screens/apartment_manager/manager_apartment/table/Table.jsx";

const ManagerApartment = () => {
    return (
        <div>
            <Dashboard />
            <Table />
        </div>
    );
};

export default ManagerApartment;