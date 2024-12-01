import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/trucks">Trucks</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
