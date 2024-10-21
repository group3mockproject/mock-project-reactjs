import "./Manage_Account.scss";
import TableManageAccount from "./component/TableManageAccount";
const Manage_Account = () => {
  return (
    <div>
      <div className="box1">
        {" "}
        <h1 className="title_header">MANAGE ACCOUNT</h1>
      </div>

      <TableManageAccount/>
    </div>
  );
};

export default Manage_Account;
