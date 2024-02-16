import React, { useEffect } from 'react'
import logo from '../Img/Logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, doLogout } from '../Auth';
export default function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        doLogout(isLoggedIn);
    }
    
    return (
        <div className='container-fluid maincolor'>
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
                                    <Link className="nav-link fw-bold" to="/mandi"><i className="fa-solid fa-shop"></i> Mandi</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#"><i className="fa-solid fa-cart-shopping"></i> Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bold" href="#"><i className="fa-solid fa-headset"></i> Help</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                {isLoggedIn() ? <><li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/farmer/dashboard">Profile</Link></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                    </ul>
                                </li></> : <>
                                    <Link className="nav-link mx-3 fw-bold" to="/login"><i className="fa-solid fa-user-plus "></i> Login</Link>
                                    <Link className="nav-link fw-bold" to="/signup"><i className="fa-solid fa-right-to-bracket "></i> SignUp</Link></>}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" alt=""
                            style={{ height: "40px" }} /></Link>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header text-white border-bottom">
                                <img src={logo} className="img-fluid" alt=""
                                    style={{ height: "40px" }} />
                                <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas"
                                    aria-label="Close">
                                </button>
                            </div>
                            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                                <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="#services">Services</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>

                                </ul>

                                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                                    {!isLoggedIn() ? <><Link to="/login" className="text-white">Login</Link>
                                        <Link to="/signup" className="text-white text-decoration-none px-3 py-1 rounded-4"
                                            style={{ backgroundColor: "#05f240" }}>Sign Up</Link></> : <>h</>}

                                </div>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </section>
        </div >
    )
}