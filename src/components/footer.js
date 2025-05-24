// src/components/Footer.js
import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer mt-auto py-3 bg-light text-center border-top">
            <div className="container">
                <span className="text-muted">© {year} Keeper App. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;