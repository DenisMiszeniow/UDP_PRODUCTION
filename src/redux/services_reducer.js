const SET_SERVICES = 'SET_SERVICES'

const initialState = {
    serviceItems: [
        
    ],
    menuItems: [
        {item:'Сварочные работы', endPoint: 'svarka', id: 1},
        {item:'Порезка металла',endPoint: 'porezka', id: 2},
        {item:'Токарные работы', endPoint: 'tokarnye', id: 3},
        {item:'Фрезерные работы', endPoint: 'frezernye', id: 4},
        {item:'Сверлильные работы', endPoint: 'sverlilnye', id: 5},
        {item:'Вальцовочные работы', endPoint:'valcovochnye', id: 6},
        {item:'Слесарные работы', endPoint: 'slesarnye', id: 7}
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

