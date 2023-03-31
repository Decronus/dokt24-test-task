import { FETCH_PRODUCTS, TOGGLE_LIKE, DELETE_PRODUCT } from "../types/main";

export const fetchProducts = (data) => ({
    type: FETCH_PRODUCTS,
    payload: data,
});

export const toggleLike = (id) => ({
    type: TOGGLE_LIKE,
    payload: id,
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});
