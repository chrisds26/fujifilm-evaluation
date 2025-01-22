import React, { useEffect, useState } from 'react';
import { data, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditProduct.css';
import InfoBar from '../../components/info-bar/InfoBar';

function EditProduct () {

    const [producto, setProducto] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleCancel = () => {
        navigate('/dashboard');
    };

    // Obtener productos
    const getProductos = async () => {
        try {
            const response = await axios.get("https://localhost:7118/api/Fujifilm/getProducto");
            if (response.data.length > 0){

                var d = response.data.filter(x => x.idProducto === parseInt(id))[0]
                setProducto(d);
            }
            else {
                alert('No hay datos');
            }
        } catch (err) {
            console.error("Error al obtener datos: ", err);
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    // Actualizar producto
    const handleSubmit = async (e) => {
        e.preventDefault();

        const codigoProducto = document.getElementById("codigoProducto").value;
        const nombreProducto = document.getElementById("nombreProducto").value;
        const precio = document.getElementById("precio").value;
        const tipoProducto = document.getElementById("tipoProducto").value;
        const idProducto = parseInt(id);
        const idUsuario = localStorage.getItem('idUsuario');

        const producto = {
            idProducto,
            codigoProducto,
            nombreProducto,
            precio,
            tipoProducto,
            idUsuario
        }

        try {
            const response = await axios.post('https://localhost:7118/api/Fujifilm/EditProducto', producto);
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
                    <h2 className='pt-3'>Editar Producto</h2>
                    <div className='col-6 p-3'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="codigoProducto" className="form-label">Código del Producto</label>
                                <input type="text" className="form-control" id="codigoProducto" defaultValue={producto.codigoProducto} name="codigoProducto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nombreProducto" className="form-label">Nombre del Producto</label>
                                <input type="text" className="form-control" id="nombreProducto" defaultValue={producto.nombreProducto} name="nombreProducto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio</label>
                                <input type="number" className="form-control" id="precio" defaultValue={producto.precio} name="precio" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tipoProducto" className="form-label">Tipo de Producto</label>
                                <input type="text" className="form-control" id="tipoProducto" defaultValue={producto.tipoProducto} name="tipoProducto" required />
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

export default EditProduct;