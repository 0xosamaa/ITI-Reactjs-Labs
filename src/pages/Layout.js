import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark px-3 sticky-top">
                <Link to="/" className="navbar-brand">
                    Products
                </Link>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
