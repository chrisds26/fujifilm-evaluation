import axios from "axios";

const getProductos = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/getProducto`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return response.data;
    } catch (err) {
        console.error("Error al obtener datos: ", err);
    }
}

const deleteProducto = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/DeleteProducto`, data);
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const insertProducto = async (producto) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/InsertProducto`, producto);
        return response.data
    } catch (error) {
        console.error('Error al insertar producto: ', error);
    }
}

const editProducto = async (producto) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/EditProducto`, producto);
        return response.data
    } catch (error) {
        console.error('Error al insertar producto: ', error);
    }
}

export { getProductos, deleteProducto, insertProducto, editProducto }