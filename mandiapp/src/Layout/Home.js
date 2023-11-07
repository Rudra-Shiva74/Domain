import React from 'react'
import logo from '../Img/Logo.png';
import img2 from '../Img/img2.jpg';
export default function Home() {
    return (
        <>
            {/* this is home module of our website  */}
            <section className='Home homecolor'>
                <div className="container py-4 my-lg-0">
                    <div className="row mt-lg- pt-3">
                        <div className="col-lg-5">
                            <div className='mt-lg-5 pt-lg-5'>
                                <h1 className='fw-bold'>Hello Farmers</h1>
                                <p>"Discover fresh opportunities with our Mandi app. Connect, trade, and thrive in the world of agriculture. Buy and sell quality produce effortlessly. Join now for a fruitful experience."</p>
                                <div className='my-4 btn-box'>
                                    <button className='btn mx-1'><i className="fa-solid fa-cart-shopping"></i> Buy</button>
                                    <button className='btn mx-1'><i className="fa-brands fa-sellsy"></i> Sell</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img2} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img2} className="d-block w-100 img-fluid" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* this is about module of our website  */}
            <section className='about' id='about'>
                <div className="contianer py-4">
                    <h1 className='text-center fw-bold'>About</h1> 
                     
                </div>
            </section>



            {/* this is service module of our website */}
            <section className='sevices maincolor' id='sevices'>
                <div className="container py-4">
                    <h1 className='text-center fw-bold'>Our Services</h1>
                    <div className="row g-3">
                        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
                            <div className="card homecolor" style={{ width: "18rem" }}>
                                <img src={img2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn">Animals</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
                            <div className="card homecolor" style={{ width: "18rem" }}>
                                <img src={img2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn">Fertilizers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
                            <div className="card homecolor" style={{ width: "18rem" }}>
                                <img src={img2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="btn-box">
                                        <a href="#" className="btn">Crops</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
