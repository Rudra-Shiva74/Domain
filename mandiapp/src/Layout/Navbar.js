import React from 'react'
import logo from '../Img/Logo.png';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    console.log(props.farmer.name);
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
                                    <Link className="nav-link active" aria-current="page" to="/">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Advantages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><i className="fa-solid fa-headset"></i></a>
                                </li>
                            </ul>
                            {/* {props.farmer.name}
                            {props.farmer ? <div>img</div> : */}
                                <div className="d-flex">
                                    <Link className="nav-link mx-3" to="/login"><i className="fa-solid fa-user-plus "></i> Login</Link>
                                    <Link className="nav-link" to="/signup"><i className="fa-solid fa-right-to-bracket "></i> SignUp</Link>
                                </div>
                        </div>
                    </div>
                </nav>
            </section>
            {/* <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header home">
                    <a className="navbar-brand" href="#"><img src="img/Logo.png" className="img-fluid" alt="" style={{ height: "50px" }} /></a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body button">
                    <div className="dropdown mt-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Advantages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-headset fa-beat-fade"></i> Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-user-plus fa-shake"></i> Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa-solid fa-right-to-bracket fa-shake"></i> SignUp</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                         Dropdown
        //                     </a>
        //                     <ul className="dropdown-menu">
        //                         <li><a className="dropdown-item" href="#">Action</a></li>
        //                         <li><a className="dropdown-item" href="#">Another action</a></li>
        //                         <li><hr className="dropdown-divider"/></li>
        //                         <li><a className="dropdown-item" href="#">Something else here</a></li>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}