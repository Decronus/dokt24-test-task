import axiosInstance from "../utils/axios";

class Queries {
    getProducts() {
        return axiosInstance.get("products");
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Queries();
