import React from 'react'
import logo from '../Img/Logo.png';
import img2 from '../Img/img2.jpg';
export default function Home() {
    return (
        <>
            <section className='Home'>
                <div className="container my-4">
                    <div className="row mt-lg-4 mt-3">
                        <div className="col-lg-5">
                            <div className='mt-lg-5 pt-lg-5'>
                                <h1 className='fw-bold'>Hello Farmers</h1>
                                <p>"Discover fresh opportunities with our Mandi app. Connect, trade, and thrive in the world of agriculture. Buy and sell quality produce effortlessly. Join now for a fruitful experience."</p>
                                <div className='my-4'>
                                    <button className='btn btn-primary mx-1'><i className="fa-solid fa-cart-shopping"></i> Buy</button>
                                    <button className='btn btn-primary mx-1'><i className="fa-brands fa-sellsy"></i> Sell</button>
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
            <section className='Service' id='sevices'>
                <div className="container my-4">
                    <h1 className='text-center fw-bold'>Our Services</h1>
                    <div className="row g-3">
                        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 d-flex justify-content-center'>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
