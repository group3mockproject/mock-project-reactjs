import { useState } from 'react';
import './Tabsn.scss';

// eslint-disable-next-line react/prop-types
const Tabsn = ({ onSelectTab }) => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onSelectTab(tab);
    };

    return (
        <div className="tabs">
      <span
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => handleTabClick('all')}
      >
        All
      </span>
            <span
                className={activeTab === 'subscribed' ? 'active' : ''}
                onClick={() => handleTabClick('subscribed')}
            >
        Subscribed
      </span>
        </div>
    );
};

export default Tabsn;
