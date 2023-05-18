import React from 'react';
import './Footer.css';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faContactCard } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h3>Get in Touch</h3>
                        <div>
                            <a href="mailto:mohammad.osama1229@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                                &nbsp; mohammad.osama1229@gmail.com
                            </a>
                            <br />
                            <a href="tel:00201091101387">
                                <FontAwesomeIcon icon={faContactCard} />
                                &nbsp; +20 109 110 1387
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <Button
                            text="Contact me"
                            linkTo="mailto:mohammad.osama1229@gmail.com"
                        />
                    </div>
                    <div
                        className="col-12 col-md-4"
                        style={{ textAlign: 'right' }}
                    >
                        <div className="social-links">
                            <a
                                href="https://www.facebook.com/0x.osamaa/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohammad-osama-5b4044186/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a
                                href="https://www.github.com/0xosamaa/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
