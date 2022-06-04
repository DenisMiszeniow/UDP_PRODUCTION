import plugPn225U from '../images/preview/plug_prev.jpg'
import gruntozacepUniversal560 from '../images/preview/gruntozacep_prev.jpg'
import scepkaUniversal from '../images/preview/scepka_prev.jpg'
import korzinaUniversal from '../images/preview/korzina_prev.jpg'


const SET_PRODUCT_ITEM_TYPE = 'SET_PRODUCT_ITEM_TYPE'

const initialState = {
    productItemsMotoblock: [
        {
            id: 1,
            productName: 'ГРУНТОЗАЦЕП УНИВЕРСАЛЬНЫЙ 560х150; 450x150; 380x150',
            productPicture: 'http://ukrdetalprom.com.ua/src/images/preview/gruntozacep_prev.jpg',
            productPictureHD: [
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7301.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7302.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7302.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7305.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7687.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7690.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/IMG_7695.JPG'
            ],
            productDiscription: {
                discriotionText: 'Грунтозацепы используются при работе культиватора или мотоблока с дополнительным навесным оборудованием, утяжеляют мотоблок (культиватор) и не допускают пробуксовки колес на грунте. Прочность увеличена в 6 раз.',
                techData: [
                    {
                        DataName: 'Высота, мм',
                        DataParameter: '560 либо 450 либо 380'
                    },
                    {
                        DataName: 'Ширина, мм',
                        DataParameter: '150'
                    },
                    {
                        DataName: 'Крепление',
                        DataParameter: 'под 4 болта (R-55)'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            }
        },
        {
            id: 2,
            productName: 'СЦЕПКИ УНИВЕРСАЛЬНЫЕ',
            productPicture: 'http://ukrdetalprom.com.ua/src//images/preview/scepka_prev.jpg',
            productPictureHD: [
                'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/IMG_7274.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/IMG_7275.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/IMG_7276.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/IMG_7277.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/IMG_7285.JPG'
            ],
            productDiscription: {
                discriotionText: 'Сцепки одинарная, двойная, тройная имеют болтовой зажим и регулировку. Для мотоблоков и культиваторов Зубр, Аврора, Кентавр, Forte, Zirka, Wtima, Rotex, Добрыня, Заря. Используется для агрегатирования и регулировки различного навесного оборудования, такого как: плоскорезы, окучники, картофелекопалки и т.д.',
                techData: [
                    {
                        DataName: 'Длина, мм',
                        DataParameter: '520; 750; 900'
                    },
                    {
                        DataName: 'Ширина, мм',
                        DataParameter: '140; 220'
                    },
                    {
                        DataName: 'Крепление Ф',
                        DataParameter: '17, 19'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            }
        }
    ],
    productItemsTractor: [
        {
            id: 1,
            productName: 'Плуг ПН 225 У',
            productPicture: 'http://ukrdetalprom.com.ua/src/images/preview/plug_prev.jpg',
            productPictureHD: [
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7308.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7309.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7310.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7311.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7313.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7314.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7315.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7318.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7320.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7322.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7324.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7331.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7326.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7323.JPG'
            ],
            productDiscription: {
                discriotionText: 'Плуг навесной ПН 225 У - новый двухкорпусный (высота корпуса 500 мм) плуг с усиленной рамой. Имеет возможность точной регулировки, улучшеный корпус, способствующий хорошему оборачиванию почвенного пласта. Корпус плуга к главной балке рамы крепится на трех болтах.Положение корпусов плуга относительно рамы и друг к другу отрегулировано на заводе и не требует дополнительных регулировок.',
                techData: [
                    {
                        DataName: 'Кол-во корпусов',
                        DataParameter: '2'
                    },
                    {
                        DataName: 'Ширина захвата, м',
                        DataParameter: '0,5'
                    },
                    {
                        DataName: 'Глубина обраб, см',
                        DataParameter: '20 - 25'
                    },
                    {
                        DataName: 'Мощность тр-ра, л.с.',
                        DataParameter: '22 - 24'
                    },
                    {
                        DataName: 'Масса, кг',
                        DataParameter: '75'
                    },
                    {
                        DataName: 'Стойка',
                        DataParameter: 'сталь'
                    },
                    {
                        DataName: 'Толщина отвала, мм',
                        DataParameter: '5'
                    },
                    {
                        DataName: 'Толщина лемеха, мм',
                        DataParameter: '8'
                    },
                    {
                        DataName: 'Длина отвала, мм',
                        DataParameter: '500'
                    },
                    {
                        DataName: 'Ширина лемеха, мм',
                        DataParameter: '390'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            },
            waranty: 24
        },
        {
            id: 2,
            productName: 'Плуг ПН 325 У',
            productPicture: 'http://ukrdetalprom.com.ua/src/images/preview/plug_3_prev.jpg',
            productPictureHD: [
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7308.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7309.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7310.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7311.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7313.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7314.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7315.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7318.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7320.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7322.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7324.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7331.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7326.JPG',
                'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/IMG_7323.JPG'
            ],
            productDiscription: {
                discriotionText: 'Плуг навесной ПН 325 У - новый трехкорпусный (высота корпуса 500 мм) плуг с усиленной рамой. Имеет возможность точной регулировки, улучшеный корпус, способствующий хорошему оборачиванию почвенного пласта. Корпус плуга к главной балке рамы крепится на трех болтах.Положение корпусов плуга относительно рамы и друг к другу отрегулировано на заводе и не требует дополнительных регулировок.',
                techData: [
                    {
                        DataName: 'Кол-во корпусов',
                        DataParameter: '3'
                    },
                    {
                        DataName: 'Ширина захвата, м',
                        DataParameter: '0,75'
                    },
                    {
                        DataName: 'Глубина обраб, см',
                        DataParameter: '20 - 27'
                    },
                    {
                        DataName: 'Мощность тр-ра, л.с.',
                        DataParameter: '28 - 35'
                    },
                    {
                        DataName: 'Масса, кг',
                        DataParameter: '105'
                    },
                    {
                        DataName: 'Стойка:',
                        DataParameter: 'сталь'
                    },
                    {
                        DataName: 'Толщина отвала, мм',
                        DataParameter: '5'
                    },
                    {
                        DataName: 'Толщина лемеха, мм',
                        DataParameter: '8'
                    },
                    {
                        DataName: 'Длина отвала, мм',
                        DataParameter: '500'
                    },
                    {
                        DataName: 'Ширина лемеха, мм',
                        DataParameter: '390'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            },
            waranty: 24
        },
        {
            id: 3,
            productName: 'Культиватор универсальный КУ-2,0У',
            productPicture: '../images/preview/ku20u.jpg',
            productDiscription: {
                discriotionText: 'Культиватор универсальный ﻿КУ - 2,0 У используется для культивирования (разрыхления)почвы, которую необходимо выполнять в предпосевной период. Благодаря колесам имеет опору на почву. Агрегатируется в качестве навесного оборудования на трактор, мощность которого от 20 - 30 л.с.',
                techData: [
                    {
                        DataName: 'Тип',
                        DataParameter: 'навесной'
                    },
                    {
                        DataName: 'Ширина захвата, м',
                        DataParameter: '2,0'
                    },
                    {
                        DataName: 'Глубина обраб, мм',
                        DataParameter: '60 - 120'
                    },
                    {
                        DataName: 'Мощность тр-ра, л.с.',
                        DataParameter: '20 - 30'
                    },
                    {
                        DataName: 'Масса, кг',
                        DataParameter: '170'
                    },
                    {
                        DataName: 'Кол-во лап, шт',
                        DataParameter: '9'
                    },
                    {
                        DataName: 'Ширина лап, мм',
                        DataParameter: '270'
                    },
                    {
                        DataName: 'Кол-во междуряд., мм',
                        DataParameter: '5'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            },
            waranty: 24
        }
    ],
    productItemsWire: [
        {
            id: 1,
            productName: 'КОРЗИНА "УНИВЕРСАЛЬНАЯ" Н - 270 ; H - 400',
            productPicture: korzinaUniversal,
            productDiscription: {
                discriotionText: 'Корзина "универсальная" - используется при заготовке, транспортировке, хранении овощей и фруктов в рыбной, строительной, производственной направленности, а также перемещении бытовых отходов. Выдерживает нагрузку ( вес ) более 50 кг.',
                techData: [
                    {
                        DataName: 'Высота, мм',
                        DataParameter: '270, 400'
                    },
                    {
                        DataName: 'Конус Ø, мм',
                        DataParameter: '300 - 520; 300 - 630'
                    },
                    {
                        DataName: 'Материал Ø, мм',
                        DataParameter: 'проволока 3; 5'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            },
            waranty: 24
        },
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