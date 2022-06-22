const SET_SERVICES = 'SET_SERVICES'

const initialState = {
    serviceItems: [
        
    ]
}

export const servicesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SERVICES: {
            const stateCopy = {...state, ...state.serviceItems}
            stateCopy.serviceItems = action.servicesItems
            return stateCopy
        }
        default: return state
    }
}

export const setServicesAC = (servicesItems) => ({type:SET_SERVICES, servicesItems})

