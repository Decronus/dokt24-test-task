import { FETCH_PRODUCTS } from "../types/main";

export const fetchProducts = (data) => ({
    type: FETCH_PRODUCTS,
    payload: data,
});
