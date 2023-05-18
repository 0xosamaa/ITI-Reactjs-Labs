import React from 'react';
import Header from '../components/Header/Header';
import './LandingPage.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="about row">
                    <div className="title col-12 col-md-5">
                        <h2>About Me</h2>
                        <hr></hr>
                    </div>
                    <div className="description col-12 col-md-7">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Vel, incidunt! Voluptas nam, error aut,
                            eveniet vel blanditiis facilis fugit explicabo nihil
                            quaerat ad consequatur deserunt libero magnam
                            aspernatur ratione voluptatibus.
                        </p>
                    </div>
                    <div className="row my-3">
                        <div className="col-5"></div>
                        <div className="col-7 text-left">
                            <Button
                                linkTo="/assets/files/cv.pdf"
                                text="Download Resume"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-skills row mb-3">
                    <div className="my-focus col-12 col-md-5">
                        <h3>My focus</h3>
                        <hr></hr>
                        <ul>
                            <li>
                                <h5>Laravel</h5>
                            </li>
                            <li>
                                <h5>Nodejs</h5>
                            </li>
                            <li>
                                <h5>HTML</h5>
                            </li>
                            <li>
                                <h5>CSS</h5>
                            </li>
                            <li>
                                <h5>Git/Github</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="my-progress col-12 col-md-7">
                        <div className="skill-progress">
                            <h5>Laravel</h5>
                            <ProgressBar striped variant="success" now={95} />
                        </div>
                        <div className="skill-progress">
                            <h5>Nodejs</h5>
                            <ProgressBar striped variant="success" now={80} />
                        </div>
                        <div className="skill-progress">
                            <h5>HTML</h5>
                            <ProgressBar striped variant="success" now={90} />
                        </div>
                        <div className="skill-progress">
                            <h5>CSS</h5>
                            <ProgressBar striped variant="success" now={90} />
                        </div>
                        <div className="skill-progress">
                            <h5>Git/Github</h5>
                            <ProgressBar striped variant="success" now={95} />
                        </div>
                    </div>
                </div>

                <div className="portfolio">
                    <div className="row">
                        <div className="col-12 col-md-4 title">
                            <h3>Portfolio</h3>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            class="card col-md-4 col-12"
                            style={{
                                paddingLeft: '0',
                                paddingRight: '0',
                            }}
                        >
                            <img
                                src="/assets/images/portfolio.webp"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <p class="card-text">Web Development</p>
                            </div>
                        </div>
                        <div
                            class="card col-md-4 col-12"
                            style={{
                                paddingLeft: '0',
                                paddingRight: '0',
                            }}
                        >
                            <img
                                src="/assets/images/portfolio.webp"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <p class="card-text">Web Development</p>
                            </div>
                        </div>
                        <div
                            class="card col-md-4 col-12"
                            style={{
                                paddingLeft: '0',
                                paddingRight: '0',
                            }}
                        >
                            <img
                                src="/assets/images/portfolio.webp"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <p class="card-text">Web Development</p>
                            </div>
                        </div>
                        <div
                            class="card col-md-4 col-12"
                            style={{
                                paddingLeft: '0',
                                paddingRight: '0',
                            }}
                        >
                            <img
                                src="/assets/images/portfolio.webp"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <p class="card-text">Web Development</p>
                            </div>
                        </div>
                        <div
                            class="card col-md-4 col-12"
                            style={{
                                paddingLeft: '0',
                                paddingRight: '0',
                            }}
                        >
                            <img
                                src="/assets/images/portfolio.webp"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <p class="card-text">Web Development</p>
                            </div>
                        </div>
                        <div
                            class="card col-md-4 col-12"
                            style={{
                                paddingLeft: '0',
                                paddingRight: '0',
                            }}
                        >
                            <img
                                src="/assets/images/portfolio.webp"
                                class="card-img-top"
                                alt="..."
                            />
                            <div class="card-body">
                                <p class="card-text">Web Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LandingPage;
