import React from 'react';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 header-content">
                        <h1>Mohammad Osama</h1>
                        <p>
                            Full stack web developer with 3 years of experience
                            building awesome web apps for people. 🪄
                        </p>
                        <Button
                            text="Contact me"
                            linkTo="mailto:mohammad.osama1229@gmail.com"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
