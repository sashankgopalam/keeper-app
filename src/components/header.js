// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="navbar navbar-dark bg-primary shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1" href="/">
                    <i className="bi bi-journal-check me-2"></i> {/* Bootstrap Icon */}
                    Keeper App
                </a>
            </div>
        </header>
    );
};

export default Header;