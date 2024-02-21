import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosBaseUrl = () => {
    return axiosBaseUrl;
};

export default useAxiosBaseUrl;