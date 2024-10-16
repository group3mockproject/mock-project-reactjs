import './Dashboard.scss';

const Dashboard = () => (
    <div className="dashboard">
        <h2>Manage Apartments</h2>
        <div className="cards">
            <div className="card">
                <h3>Total Property</h3>
                <p>1,500</p>
                <span className="indicator positive">↑ 20% Last month total 1,050</span>
            </div>
            <div className="card">
                <h3>Number of Sales</h3>
                <p>320</p>
                <span className="indicator negative">↓ 20% Last month total 1,050</span>
            </div>
            <div className="card">
                <h3>Total Sales</h3>
                <p>$150k</p>
                <span className="indicator positive">↑ 20% Last month total 1,050</span>
            </div>
        </div>
    </div>
);

export default Dashboard;
