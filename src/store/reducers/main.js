import { FETCH_PRODUCTS } from "../actions/types/main";

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

        default:
            return state;
    }
}
