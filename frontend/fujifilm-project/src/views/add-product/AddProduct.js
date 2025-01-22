import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddProduct.css';
import InfoBar from '../../components/info-bar/InfoBar';

function AddProduct () {

    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/dashboard');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const codigoProducto = document.getElementById("codigoProducto").value;
        const nombreProducto = document.getElementById("nombreProducto").value;
        const precio = document.getElementById("precio").value;
        const tipoProducto = document.getElementById("tipoProducto").value;
        const idUsuario = localStorage.getItem('idUsuario');

        const producto = {
            codigoProducto,
            nombreProducto,
            precio,
            tipoProducto,
            idUsuario
        }

        try {
            const response = await axios.post('https://localhost:7118/api/Fujifilm/InsertProducto', producto);
            alert('Datos enviados con exito')
            navigate('/dashboard');
        }
        catch (error) {
            console.error('Error: ', error);
        }
    };

    return(
        <>
            <section className='container-fluid add-product' style={{ minHeight: '100vh' }}>
                <InfoBar />
                <div className='row form-container m-5'>
                    <h2 className='pt-3'>Añadir Producto</h2>
                    <div className='col-6 p-3'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="codigoProducto" className="form-label">Código del Producto</label>
                                <input type="text" className="form-control" id="codigoProducto" name="codigoProducto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombreProducto" className="form-label">Nombre del Producto</label>
                                <input type="text" className="form-control" id="nombreProducto" name="nombreProducto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio</label>
                                <input type="number" className="form-control" id="precio" name="precio" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tipoProducto" className="form-label">Tipo de Producto</label>
                                <input type="text" className="form-control" id="tipoProducto" name="tipoProducto" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <button type="button" className="btn btn-danger ms-2" onClick={handleCancel}>Cancelar</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddProduct;