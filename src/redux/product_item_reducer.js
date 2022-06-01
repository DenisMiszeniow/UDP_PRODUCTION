const SET_PRODUCT_ITEM_TYPE = 'SET_PRODUCT_ITEM_TYPE'

const initialState = {
    productItems: [
        {
            id:1, 
            productName: 'ГРУНТОЗАЦЕП УНИВЕРСАЛЬНЫЙ 560х150; 450x150; 380x150',
            productPicture: '../images/preview/gruntozacep_prev.jpg',
            productDiscription: {
                discriotionText: 'Грунтозацепы используются при работе культиватора или мотоблока с дополнительным навесным оборудованием, утяжеляют мотоблок (культиватор) и не допускают пробуксовки колес на грунте. Прочность увеличена в 6 раз.',
                techData: [
                    {
                        DataName: 'Высота, мм:',
                        DataParameter: '560 либо 450 либо 380'
                    },
                    {
                        DataName: 'Ширина, мм:',
                        DataParameter: '150'
                    },
                    {
                        DataName: 'Крепление:',
                        DataParameter: 'под 4 болта (R-55)'
                    },
                    {
                        DataName: 'Производитель:',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]}
        },
        {
            id:2, 
            productName: 'СЦЕПКИ УНИВЕРСАЛЬНЫЕ',
            productPicture: '../images/preview/scepka_prev.jpg',
            productDiscription: {
                discriotionText: 'Сцепки одинарная, двойная, тройная имеют болтовой зажим и регулировку. Для мотоблоков и культиваторов Зубр, Аврора, Кентавр, Forte, Zirka, Wtima, Rotex, Добрыня, Заря. Используется для агрегатирования и регулировки различного навесного оборудования, такого как: плоскорезы, окучники, картофелекопалки и т.д.',
                techData: [
                    {
                        DataName: 'Длина, мм:',
                        DataParameter: '520; 750; 900'
                    },
                    {
                        DataName: 'Ширина, мм:',
                        DataParameter: '140; 220'
                    },
                    {
                        DataName: 'Крепление Ф:',
                        DataParameter: '17, 19'
                    },
                    {
                        DataName: 'Производитель:',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]}
        }
    ]
}

export const productItemReducer = (state = initialState) => {
    return state
    // switch(action.type) {
    //     case SET_PRODUCTS_TYPE: {
    //         return (
    //             {...state, ...state.productsPages}
    //         )
    //     }
    //     default: return state
    // }
}

// export const setProductsPageAC = (categories) => ({type: SET_PRODUCTS_TYPE, categories})