import React from 'react'
import logo from '../Img/Logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className='container-fluid'>
            <section className="backg sticky-top text" id="navbar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" alt=""
                            style={{ height: "50px" }} /></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" aria-current="page" href="#about"><i className="fa-solid fa-eject"></i> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#sevices"><i className="fa-brands fa-servicestack"></i> Service</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" to="/mandi"><i class="fa-solid fa-shop"></i> Mandi</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#"><i className="fa-solid fa-cart-shopping"></i> Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#"><i className="fa-solid fa-headset"></i> Help</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <Link className="nav-link mx-3 fw-bold" to="/login"><i className="fa-solid fa-user-plus "></i> Login</Link>
                                <Link className="nav-link fw-bold" to="/signup"><i className="fa-solid fa-right-to-bracket "></i> SignUp</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}