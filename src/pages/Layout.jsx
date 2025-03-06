import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const Layout = ({ children }) => {
    const location = useLocation();
    
    // Hide header only on the Signup page
    const hideHeader = location.pathname === '/signup';

    return (
        <div>
            {!hideHeader && <Header />}  
            <main>{children}</main>
        </div>
    );
};

export default Layout;
