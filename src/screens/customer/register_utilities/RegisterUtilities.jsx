import { useState } from 'react';
import './RegisterUtilities.scss';
import { Tabs } from '@mui/material';
import ServiceCard from '@/screens/customer/register_utilities/service_card/ServiceCard.jsx';
import SearchIcon from '@mui/icons-material/Search';

const services = [
    { title: 'GYM', price: '$24', description: 'Access to gym facilities.', color: 'red', status: "0" },
    { title: 'Playground', price: '$24', description: 'Playground access for kids.', color: 'green', status: "0" },
    { title: 'GYM', price: '$24', description: 'Access to gym facilities.', color: 'purple', status: "0" },
    { title: 'Playground', price: '$24', description: 'Playground access for kids.', color: 'green', status: "0" },
];

const subscribedServices = [
    { title: 'GYM', price: '$24', description: 'Access to gym facilities.', color: 'red', status: "1" },
];

function RegisterUtilities() {
    const [selectedTab, setSelectedTab] = useState('all');

    const handleSelectTab = (tab) => {
        setSelectedTab(tab);
    };

    const displayedServices = selectedTab === 'all' ? services : subscribedServices;

    return (
        <div className="app">
            <h1>UTILITIES SERVICES</h1>
            <p className="subtitle">Welcome !!</p>
            <div className="nav">
                <div className="select">
                    <button
                        className={`select-button ${selectedTab === 'all' ? 'active' : ''}`}
                        onClick={() => handleSelectTab('all')}
                    >
                        All
                    </button>
                    <span>|</span>
                    <button
                        className={`select-button ${selectedTab === 'subscribed' ? 'active' : ''}`}
                        onClick={() => handleSelectTab('subscribed')}
                    >
                        Subscribed
                    </button>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button>
                        <SearchIcon />
                    </button>
                </div>
            </div>
            {selectedTab === 'all' && <Tabs onSelectTab={setSelectedTab} />}
            <div className="services-grid">
                {displayedServices.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
}

export default RegisterUtilities;
