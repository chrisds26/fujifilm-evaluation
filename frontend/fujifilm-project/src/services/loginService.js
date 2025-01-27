import axios from "axios";

const login = async (values) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, values);
        return response.data;
    } catch (err) {
        console.error("Error al obtener datos: ", err);
    }
}

export { login }