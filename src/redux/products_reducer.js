const SET_PRODUCT_PAGE = 'SET_PRODUCT_PAGE'

const initialState = {
    productsPages: [
    ]
}

export const productsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCT_PAGE: {
            const stateCopy = {...state, productsPages: action.categories}
            // stateCopy.productsPages = action.categories
            return stateCopy
        }
        default: return state
    }
}

export const setProductsPageAC = (categories) => ({type: SET_PRODUCT_PAGE, categories})