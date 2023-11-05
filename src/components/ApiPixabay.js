import axios from "axios";

const API_KEY = '39346761-8b01f68fe4eefe6876f196ed9';

const BASE_URL = 'https://pixabay.com/api';

const getAPI = (imageName, page) => {
    return axios.get(`${BASE_URL}/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
};
   export default getAPI;