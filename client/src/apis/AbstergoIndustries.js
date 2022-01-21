import axios from "axios";
import axiosRetry from "axios-retry";

const AbstergoIndustries = axios.create({
    baseURL:
        process.env.NODE_ENV !== "production"
            ? "http://localhost:5000"
            : "https://abstergo-industries.herokuapp.com",
    timeout: 5000,
});

axiosRetry(AbstergoIndustries, { retries: 3 });

export default AbstergoIndustries;