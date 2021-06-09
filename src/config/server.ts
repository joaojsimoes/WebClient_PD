import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:4000/api",
    headers: {"Access-Control-Allow-Origin": "*"}
});

export default API;