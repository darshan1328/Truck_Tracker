import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Headerpart from './components/Headerpart';
import Dashboard from './components/Dashboard';

function App() {
    return (
            <div className="App">
                <Headerpart />
                <div className="container">
                    <Sidebar />
                </div>
                <Dashboard />
                <Footer />
            </div>
    );
}

export default App;
