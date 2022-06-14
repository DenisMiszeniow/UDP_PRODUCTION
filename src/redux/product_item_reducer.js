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
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/gruntozacepy_1.JPG', alt: 'Грунтозацеп Универсальный Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/gruntozacepy_2.JPG', alt: 'Грунтозацеп Универсальный Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/gruntozacepy_3.JPG', alt: 'Грунтозацеп Универсальный Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/gruntozacepy_4.JPG', alt: 'Грунтозацеп Универсальный Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/gruntozacepy/gruntozacepy_5.JPG', alt: 'Грунтозацеп Универсальный Укрдетальпром'}
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
                ],
                waranty: 24
            }
        },
        {
            id: 2,
            productName: 'СЦЕПКИ УНИВЕРСАЛЬНЫЕ',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/scepki_1.JPG', alt: 'Сцепки Универсальные Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/scepki_2.JPG', alt: 'Сцепки Универсальные Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/scepki_3.JPG', alt: 'Сцепки Универсальные Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/scepki_4.JPG', alt: 'Сцепки Универсальные Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/scepki_5.JPG', alt: 'Сцепки Универсальные Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/scepki/scepki_6.JPG', alt: 'Сцепки Универсальные Укрдетальпром'}
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
                ],
                waranty: 24
            }
        },
        {
            id: 3,
            productName: 'ПЛОСКОРЕЗ (ПРОПОЛЬНИК) УНИВЕРСАЛЬНЫЙ СО СМЕННЫМИ НОЖАМИ',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/ploskorez/ploskorez_2.JPG', alt: 'ПЛОСКОРЕЗ (ПРОПОЛЬНИК) УНИВЕРСАЛЬНЫЙ СО СМЕННЫМИ НОЖАМИ Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/ploskorez/ploskorez_1.JPG', alt: 'ПЛОСКОРЕЗ (ПРОПОЛЬНИК) УНИВЕРСАЛЬНЫЙ СО СМЕННЫМИ НОЖАМИ Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/ploskorez/ploskorez_3.JPG', alt: 'ПЛОСКОРЕЗ (ПРОПОЛЬНИК) УНИВЕРСАЛЬНЫЙ СО СМЕННЫМИ НОЖАМИ Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/ploskorez/ploskorez_4.JPG', alt: 'ПЛОСКОРЕЗ (ПРОПОЛЬНИК) УНИВЕРСАЛЬНЫЙ СО СМЕННЫМИ НОЖАМИ Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/ploskorez/ploskorez_5.JPG', alt: 'ПЛОСКОРЕЗ (ПРОПОЛЬНИК) УНИВЕРСАЛЬНЫЙ СО СМЕННЫМИ НОЖАМИ Укрдетальпром'},
            ],
            productDiscription: {
                discriotionText: 'Плоскорез (пропольник) со сменными ножами используется для междурядной обработки участка. Предназначен для сплошной обработки верхнего слоя грунта, уничтожает сорняки. Плоскорез устанавливается как на одинарную, так и на двойную или тройную сцепки в зависимости от мощности двигателя аграрного инструмента.',
                techData: [
                    {
                        DataName: 'Высота, мм',
                        DataParameter: '480'
                    },
                    {
                        DataName: 'Ширина захвата, мм',
                        DataParameter: '270-350; 270-520'
                    },
                    {
                        DataName: 'Глубина обраб., мм',
                        DataParameter: '80-100'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ],
                waranty: 24
            }
        },
        {
            id: 4,
            productName: 'ОКУЧНИК УНИВЕРСАЛЬНЫЙ "СТРЕЛА"',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/strela/strela_1.JPG', alt: 'ОКУЧНИК УНИВЕРСАЛЬНЫЙ "СТРЕЛА" Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/strela/strela_2.JPG', alt: 'ОКУЧНИК УНИВЕРСАЛЬНЫЙ "СТРЕЛА" Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/strela/strela_3.JPG', alt: 'ОКУЧНИК УНИВЕРСАЛЬНЫЙ "СТРЕЛА" Укрдетальпром'}
            ],
            productDiscription: {
                discriotionText: 'Окучник регулируемый "СТРЕЛА" агрегатируется при помощи одинарной регулируемой сцепки. Возможна эксплуатация двух или трех изделий одновременно - тогда вам понадобится двойная (тройная) сцепка. Предназначен для обработки междурядий - окучивания, а также для прорезания борозд под посадку различных культур.',
                techData: [
                    {
                        DataName: 'Высота, мм',
                        DataParameter: '480'
                    },
                    {
                        DataName: 'Ширина захвата, мм',
                        DataParameter: '250-500'
                    },
                    {
                        DataName: 'Глубина обраб., мм',
                        DataParameter: '120-200'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ],
                waranty: 24
            }
        },
        {
            id: 5,
            productName: 'ФРЕЗА ( ПОЧВОФРЕЗА ) - 1 секция',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/freza/freza_1.JPG', alt: 'ФРЕЗА ( ПОЧВОФРЕЗА ) - 1 секция Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/freza/freza_2.JPG', alt: 'ФРЕЗА ( ПОЧВОФРЕЗА ) - 1 секция Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/freza/freza_3.JPG', alt: 'ФРЕЗА ( ПОЧВОФРЕЗА ) - 1 секция Укрдетальпром'}
            ],
            productDiscription: {
                discriotionText: 'Фреза ( почвофреза ) секционная используется для сплошной обработки (культивации) слоя земли. Ширина обработки зависит от количества секций и мощности двигателя. Диаметр посадочного вала - 30 мм, длина ножа 280 мм, межосевое расстояние крепежных отверстий ножа - 70 мм.',
                techData: [
                    {
                        DataName: 'Глубина культивации, мм',
                        DataParameter: '80-200'
                    },
                    {
                        DataName: 'Привод',
                        DataParameter: 'от оси'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ]
            }
        },
        {
            id: 6,
            productName: 'КАРТОФЕЛЕКОПАЛКА УНИВЕРСАЛЬНАЯ : 520 х 250',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/kartofelekopalka/kartofelekopalka_1.JPG', alt: 'КАРТОФЕЛЕКОПАЛКА УНИВЕРСАЛЬНАЯ 520 х 250 Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/kartofelekopalka/kartofelekopalka_2.JPG', alt: 'КАРТОФЕЛЕКОПАЛКА УНИВЕРСАЛЬНАЯ 520 х 250 Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/kartofelekopalka/kartofelekopalka_3.JPG', alt: 'КАРТОФЕЛЕКОПАЛКА УНИВЕРСАЛЬНАЯ 520 х 250 Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/kartofelekopalka/kartofelekopalka_4.JPG', alt: 'КАРТОФЕЛЕКОПАЛКА УНИВЕРСАЛЬНАЯ 520 х 250 Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/kartofelekopalka/kartofelekopalka_5.JPG', alt: 'КАРТОФЕЛЕКОПАЛКА УНИВЕРСАЛЬНАЯ 520 х 250 Укрдетальпром'},
                ],
            productDiscription: {
                discriotionText: 'Картофелекопалка универсальная для мотоблоков и мотокультиваторов агрегатируется при помощи одинарной регулируемой сцепки.Возможна эксплуатация двух или трех изделий одновременно - тогда вам понадобится двойная (тройная) сцепка.Картофелекопалка универсальная используется для выкапывания картофеля и других корнеплодов.﻿',
                techData: [
                    {
                        DataName: 'Высота, мм',
                        DataParameter: '520'
                    },
                    {
                        DataName: 'Ширина, мм',
                        DataParameter: '250'
                    },
                    {
                        DataName: 'Глубина обраб., мм',
                        DataParameter: '80-120'
                    },
                    {
                        DataName: 'Производитель',
                        DataParameter: 'OOO УКРДЕТАЛЬПРОМ'
                    }
                ],
                waranty: 24
            }
        }
    ],
    productItemsTractor: [
        {
            id: 1,
            productName: 'Плуг ПН 225 У',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_1.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_2.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_3.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_4.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_5.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_6.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_7.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_8.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_9.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_10.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_11.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
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
                ],
                waranty: 24
            },
            waranty: 24
        },
        {
            id: 2,
            productName: 'Плуг ПН 325 У',
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_325.JPG', alt: 'ПЛУГ ПН 325 У Укрдетальпром'},
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
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/kultivator/kultivator_1.JPG', alt: 'КУЛЬТИВАТОР КУ-2,0У Укрдетальпром'},
            ],

            productDiscription: {
                discriotionText: 'Культиватор универсальный КУ - 2,0 У используется для культивирования (разрыхления)почвы, которую необходимо выполнять в предпосевной период. Благодаря колесам имеет опору на почву. Агрегатируется в качестве навесного оборудования на трактор, мощность которого от 20 - 30 л.с.',
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
            productPicture: [
                {image: 'http://ukrdetalprom.com.ua/src/images/foto_HD/plug/plug_1.JPG', alt: 'ПЛУГ ПН 225 У Укрдетальпром'},
            ],
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