import React, { useEffect, useState } from "react";
import axios from "axios";
import './DashboardPage.css'
import { useNavigate } from "react-router-dom";
import InfoBar from "../../components/info-bar/InfoBar";

function DashboardPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const [productos, setProductos] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();


    // Obtener productos
    const getProductos = async () => {
        try {
            const response = await axios.get("https://localhost:7118/api/Fujifilm/getProducto");
            if (response.data.length > 0){
                setProductos(response.data);
                setFilteredProducts(response.data);
            }
            else {
                alert('No hay datos');
            }
        } catch (err) {
            console.error("Error al obtener datos: ", err);
        }
    }

    // Agregar producto
    const handleAddProduct = () => {
        navigate('/dashboard/add-product');
    };

    // Editar producto
    const handleEditProduct = (id) => {
        navigate(`/dashboard/edit-product/${id}`);
    };

    // Eliminar producto
    const handleDeleteProduct = async (id) => {
        try {
            let data = {
                idProducto : id
            }
            const response = await axios.post('https://localhost:7118/api/Fujifilm/DeleteProducto', data);
            alert('Registro Eliminado con exito')
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = productos.filter(product => 
            product.nombreProducto.toLowerCase().includes(e.target.value.toLowerCase()) ||
            product.codigoProducto.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const status = (estatus) => {
        if (estatus !== '0') {
            return 'Activo'
        } else {
            return 'Inactivo'
        }
    }

    return(
        <>
        <section className="container-fluid dashboard-page" style={{ minHeight: '100vh' }}>
            <InfoBar />
            <h1 className="pt-5 pb-3 text-center">Gestión de Productos</h1>
            <div className="row">
                <div className="col mb-3 d-flex justify-content-end">
                    <input
                        type="text"
                        className="form-control form-search-input me-3"
                        placeholder="Buscar productos"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-primary mb-3" onClick={handleAddProduct}>Agregar Producto</button>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="table-dark">
                    <th style={{ width: "5%" }}>ID</th>
                    <th style={{ width: "15%" }}>Código</th>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "10%" }}>Precio</th>
                    <th style={{ width: "10%" }}>Usuario</th>
                    <th style={{ width: "10%" }}>Estatus</th>
                    <th style={{ width: "15%" }}>Tipo</th>
                    <th style={{ width: "15%" }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.idProducto}>
                            <td>{product.idProducto}</td>
                            <td>{product.codigoProducto}</td>
                            <td>{product.nombreProducto}</td>
                            <td>{product.precio}</td>
                            <td>{product.idUsuario}</td>
                            <td>{status(product.estatus)}</td>
                            <td>{product.tipoProducto}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditProduct(product.idProducto)}>Editar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(product.idProducto)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </>
    );
}

export default DashboardPage;