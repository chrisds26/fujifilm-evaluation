import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import axios from "axios";
import InfoBar from "../../components/info-bar/InfoBar";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const fetchLogin = async (values) => {
        try {
            const response = await axios.post("https://localhost:7118/api/Fujifilm/login", values);
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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let values = {
            nombre: username,
            contrasena: password
        }
        fetchLogin(values);
    
        /* if (username === validUser && password === validPassword) {
          navigate('/dashboard');
        } else {
          alert('Usuario o contraseña incorrectos');
        } */
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