
const SET_MOTOBLOCK_UNITS = 'SET_MOTOBLOCK_UNITS'
const SET_TRACTOR_UNITS = 'SET_TRACTOR_UNITS'
const SET_WIRE_UNITS = 'SET_WIRE_UNITS'

const initialState = {
    productItemsMotoblock: [],
    productItemsTractor: [],
    productItemsWire: [],
}

export const productItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MOTOBLOCK_UNITS: {
            const stateCopy = {...state, ...state.productItemsMotoblock}
            stateCopy.productItemsMotoblock = action.motoblockItems
            return stateCopy
        }
        case SET_TRACTOR_UNITS: {
            const stateCopy = {...state, ...state.productItemsTractor}
            stateCopy.productItemsTractor = action.tractorItems
            return stateCopy
        }
        case SET_WIRE_UNITS: {
            const stateCopy = {...state, ...state.productItemsWire}
            stateCopy.productItemsWire = action.wireItems
            console.log(stateCopy)
            return stateCopy
        }
        default: return state
    }
}

export const motoblockItemsAC = (motoblockItems) => ({type: SET_MOTOBLOCK_UNITS, motoblockItems})
export const tractorItemsAC = (tractorItems) => ({type: SET_TRACTOR_UNITS, tractorItems})
export const wireItemsAC = (wireItems) => ({type: SET_WIRE_UNITS, wireItems})
