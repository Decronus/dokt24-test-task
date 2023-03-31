import { FETCH_PRODUCTS, TOGGLE_LIKE, DELETE_PRODUCT } from "../actions/types/main";

const initialState = {
    products: null,
};

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS: {
            const products = action.payload;

            products.forEach((product) => {
                product.like = false;
            });

            return {
                ...state,
                products: products,
            };
        }

        case TOGGLE_LIKE: {
            const newProducts = JSON.parse(JSON.stringify(state.products));

            newProducts.forEach((el) => {
                if (el.id === action.payload) {
                    el.like = !el.like;
                    return;
                }
            });

            return {
                ...state,
                products: newProducts,
            };
        }

        case DELETE_PRODUCT: {
            const newProducts = JSON.parse(JSON.stringify(state.products)).filter((el) => el.id !== action.payload);

            return {
                ...state,
                products: newProducts,
            };
        }

        default:
            return state;
    }
}
