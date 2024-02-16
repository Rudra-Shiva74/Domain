import React, { useState } from 'react'
import singup from '../Img/SingUp.png';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { setStateToDiss } from '../Service/Operation.js'
export default function Signup(props) {
    let navigate = useNavigate();
    const [farmerid, setFarmerid] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [number, setNumber] = useState('');
    const [mandiname, setMandiname] = useState('');
    const [diss, setDiss] = useState('');
    const [state, setState] = useState('hjhjh');
    const [farmeradhar, setFarmeradhar] = useState('');
    const [image, setImage] = useState('');
    const [check, setCheck] = useState(false);
    const [district, setDistrict] = useState([]);
    const [showpass, setShowpass] = useState({ pass: 'fa-eye', type: 'password', cpass: 'fa-eye', ctype: 'password' });
    // const [uploadimg, setUploadimg] = useState(singup);

    const saveFarmer = (e) => {
        e.preventDefault();
        if (check) {
            if (name === '') {
                toast.error('Please Enter Your Name..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (email === '') {
                toast.error('Please Enter Your Email..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (number === '') {
                toast.error('Please Enter Your Number..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (farmeradhar === '') {
                toast.error('Please Enter Your Adhar..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (password === '') {
                toast.error('Please Enter Your Password..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (password !== cpassword) {
                toast.error('Your Password do not Match..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (state === '') {
                toast.error('Please Select Your State..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (diss === '') {
                toast.error('Please Select Your Distric..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else if (mandiname === '') {
                toast.error('Please Select Your Mandi..!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else {
                const farmer = { name, email, password, number, farmeradhar, image, farmerid, diss, state, mandiname };
                axios.post('http://localhost:8080/farmer', farmer, {
                    headers: { 'Content-Type': 'application/json' }
                }).then((response) => {
                    if (response.status !== 500) {
                        toast.success('Farmer Registration Done..!', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        setTimeout(() => {
                            navigate('/login');
                        }, 2000)
                    }
                    else {
                        toast.error('Please Enter Your Name..!', {
                            position: "top-center",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });

                    }
                }).catch(error => {
                    toast.error(error.response.data, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
            }
        }
        else {
            toast.error('Please Check Term Condition..!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const showPassword = (index) => {
        if (index === 1) {
            if (showpass.type === 'password')
                setShowpass({ pass: 'fa-eye-slash', type: 'text', ctype: showpass.ctype, cpass: showpass.cpass });
            else
                setShowpass({ pass: 'fa-eye', type: 'password', ctype: showpass.ctype, cpass: showpass.cpass });
        }
        else {
            if (showpass.ctype === 'password')
                setShowpass({ cpass: 'fa-eye-slash', ctype: 'text', type: showpass.type, pass: showpass.pass });
            else
                setShowpass({ cpass: 'fa-eye', ctype: 'password', type: showpass.type, pass: showpass.pass });
        }
    }
    const setDisstostate = (e) => {
        setState(e.target.value);
        setDistrict(setStateToDiss(e.target.value));
    }
    return (
        <div className='container mt-3 d-flex justify-content-center'>
            <div className="card shadow registration-form" style={{ width: "60rem" }}>
                <h1 className='text-center'>Sign up</h1>
                <div className='row'>
                    <div className='col-lg-5'>
                        {/* <img src={singup} alt="" className='img-fluid' /> */}
                    </div>
                    <div className='col-lg-7'>
                        <div className='mx-2 my-2'>
                            <form onSubmit={saveFarmer}>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                <i className="fa-solid fa-user mt-2 ps-2"></i>&nbsp;<input type="text" className="form-control" id="name" name='name' autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                <i className="fa-solid fa-envelope mt-2 ps-2"></i>&nbsp;<input type="email" className="form-control" id="email" name='email' autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value); setFarmerid(e.target.value.split('@')[0]) }} placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                <i className="fa-solid fa-mobile-screen-button mt-2 ps-2"></i>&nbsp;<input type="number" className="form-control" id="number" name='number' autoComplete='off' value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                <i className="fa-solid fa-address-card mt-2 ps-2"></i>&nbsp;<input type="number" className="form-control" id="adhar" autoComplete='off' name='farmeradhar' value={farmeradhar} onChange={(e) => setFarmeradhar(e.target.value)} placeholder="Adhar Number" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;<div className='password-toggle'><input type={showpass.type} className="form-control" id="password" name='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><i className={`fa-regular ${showpass.pass}`} onClick={() => showPassword(1)}></i></div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;<div className='password-toggle'><input type={showpass.ctype} className="form-control" id="cpassword" name='cpassword' autoComplete='off' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder="Confirm Password" /><i className={`fa-regular ${showpass.cpass}`} onClick={() => showPassword(2)}></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                &nbsp;<select className="form-select" id='state' value={state} onChange={setDisstostate}>
                                                    <option value="">Select Your State</option>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Ladakh">Ladakh</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                            </div>
                                            <div className="mt-3">
                                                <div className="d-flex bottom-line">
                                                    &nbsp;<select className="form-select" id='district' aria-label="Default select example" name='diss' value={diss} onChange={(e) => setDiss(e.target.value)}>
                                                        <option>Select Your Distric</option>
                                                        {district.map((ele) => {
                                                            return (
                                                                <option value={ele} key={ele}>{ele}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex bottom-line">
                                                &nbsp;<input type="text" name='mandiname' value={mandiname} onChange={(e) => setMandiname(e.target.value)} className="form-control" id="mandiname" autoComplete='off' placeholder="Mandi" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="d-flex" >
                                                <label htmlFor="image"><i className="fa-solid fa-image mt-2"></i> Upload Img</label>&nbsp;<input type="file" id='image' accept='image/jpeg, image/png, image/jpg' className="form-control" name='image' style={{ display: "none" }} />
                                                <img src={singup} alt="" className='img-fluid rounded-4' style={{ height: "30px", width: "30px" }} />
                                            </div>
                                        </div> 

                                        <div className='mt-3'>
                                            <input className="form-check-input" type="checkbox" id="checkbox" style={{ cursor: 'pointer' }} onChange={() => setCheck(!check)} aria-label="..." /> <label htmlFor="checkbox" style={{cursor:'pointer'}}> Terms and Condtion.</label>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <button className="btn btn-success" type="submit"> Submit
                                            </button>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <button className="btn btn-danger" type="button">
                                                <i className="fa-brands fa-google"></i>  LOGIN IN WITH GOOGLE
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    )
}
