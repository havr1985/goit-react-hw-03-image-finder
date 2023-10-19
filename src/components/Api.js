import axios from "axios";

export async function fetchImages(q, page) {
    const baseURL = 'https://pixabay.com/api/'; 
    const key = '39126607-3ae5cf154c5ca3fc6757e3d2b';
    const response = await axios.get(`${baseURL}?key=${key}&q=${q}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`);
    return response.data;

}