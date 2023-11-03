import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    let navigate = useNavigate();
    const [farmerid, setFarmerid] = useState('');
    const [farmerpassword, setFarmerpassword] = useState('');
    const [farmer, setFarmer] = useState({});
    const loginFarmer = async (e) => {
        e.preventDefault();
        const login = { farmerid, farmerpassword }
        if (farmerid === '') {
            toast.error('Please Enter Farmerid..!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (farmerpassword === '') {
            toast.error('Please Enter Password..!', {
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
            await axios.post('http://localhost:8080/login', login, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then((response) => {
                    setFarmer(response.data);
                    toast.success("Login Done..!", {
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
                .catch((errr) => {
                    toast.error(errr.response.data, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
        }
    }
    useEffect(() => {
    }, [farmer])
    return (
        <div className='container d-flex justify-content-center'>
            <div className="card shadow" style={{ width: "30rem" }}>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={loginFarmer}>
                    <div className='mx-2 my-2'>
                        <div className="mb-3">
                            <div className="d-flex">
                                <i className="fa-solid fa-user mt-2"></i>&nbsp;<input type="text" value={farmerid} onChange={(e) => setFarmerid(e.target.value)} className="form-control" id="farmerid" autoComplete='off' placeholder="farmerid" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex">
                                <i className="fa-solid fa-lock mt-2"></i>&nbsp;<input type="password" value={farmerpassword} onChange={(e) => setFarmerpassword(e.target.value)} className="form-control" id="farmerpass" autoComplete='off' placeholder="Password" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-danger' type='submit' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
