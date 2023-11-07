import React from 'react'
import singup from '../Img/Logo.png';

export default function Footer() {
    return (
        <footer className='text-center text-lg-start homecolor'>
            <div className='container '>
                <div className="row g-3">
                    <div className='col-lg-3 col-md-6 col-12'>
                        <img src={singup} alt="" className='img-fluid m-0 p-0' style={{ height: "60px", width: "170px" }} />
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deserunt aspernatur dolore, maxime voluptas veniam.</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <h4 className='fw-bold mt-4'>Address</h4>
                        <p className='mt-4 mb-0'>lorem 12 121 212 12</p>
                        <p className='m-0'>lorem 12 121 212 12 </p>
                        <p className='m-0'>lorem 12 121 212 12 </p>
                        <p className='m-0'>lorem 12 121 212 12 </p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <h4 className='fw-bold mt-4'>Quick Link</h4>
                        <div className='mt-3'>
                            <a href="" className='d-block'><i className="fa-solid fa-link"></i> About</a>
                            <a href="" className='d-block'><i className="fa-solid fa-link"></i> Contact Us</a>
                            <a href="" className='d-block'><i className="fa-solid fa-link"></i> Our Service</a>
                            <a href="" className='d-block'><i className="fa-solid fa-link"></i> Term & Condition</a>
                            <a href="" className='d-block'><i className="fa-solid fa-link"></i> Support</a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                        <h4 className='fw-bold mt-4'>Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ea.</p>
                        <div className='mt-3 d-flex text-center'>
                            <input type="text" placeholder='Your Email' />
                            <div className="btn-box"><button className='btn'>Subscribe</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
