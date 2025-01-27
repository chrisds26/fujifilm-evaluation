import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import axios from "axios";
import InfoBar from "../../components/info-bar/InfoBar";
import { login } from "../../services/loginService";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    /* const fetchLogin = async (values) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, values);
            if (response.data.contrasena !== null){
                localStorage.setItem('idUsuario', response.data.idUsuario)
                navigate('/dashboard');
            }
            else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (err) {
            console.error("Error al obtener datos: ", err);
        }
    } */

    const handleSubmit = async (event) => {
        event.preventDefault();
        let values = {
            nombre: username,
            contrasena: password,
            token: ''
        }
        /* fetchLogin(values); */
        try {
            const response = await login(values);
            if (response.contrasena !== null){
                localStorage.setItem('idUsuario', response.idUsuario)
                localStorage.setItem('token', response.token)
                navigate('/dashboard');
            }
            else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (err) {
            console.error("Error al obtener datos: ", err);
        }
    };

    return(
        <>
        <section className="container-fluid login-page" style={{ minHeight: '100vh' }}>
            <InfoBar />
            <h1 className="text-center m-5">Iniciar sesion</h1>
            <div className="row justify-content-center align-items-center" >
                <div className="col-4 form-login">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fw-bold">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}

export default LoginPage;