import styles from '../menu/menu.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



const Menu = (props) => {
    const [showProducts, setShowProducts] = useState(false)
    const [showServices, setShowServices] = useState(false)
    const onClickProducts = () => setShowProducts(!showProducts)
    const onClickServices = () => setShowServices(!showServices)


    return (
        <div className={styles.menu}>
            <ul>
                <li><NavLink to={'/onas'} title=" О нас">О Компании</NavLink></li>
                <li onClick={onClickProducts}><span>Продукция</span></li>
                {showProducts && <ul className={styles.submenu}>
                    {props.products.map(
                        (section) => {
                            return (
                                <li>
                                    <NavLink to={`/${section.section}`} className={(navData) => navData.isActive ? styles.active : ""} >
                                        {section.productPageTitle}
                                    </NavLink>
                                </li>
                            )
                        }
                    )
                    }
                </ul>}
                {showProducts && showServices}
                <li onClick={onClickServices}><span>Услуги</span></li>
                {showServices && <ul className={styles.submenu}>
                    <li><a href='#' >Сварочные работы</a></li>
                    <li><a href='#' >Порезка металла</a></li>
                    <li><a href='#' >Токарные работы</a></li>
                    <li><a href='#' >Фрезерные работы</a></li>
                    <li><a href='#' >Сверлильные работы</a></li>
                    <li><a href='#' >Вальцовочные работы</a></li>
                    <li><a href='#' >Слесарные работы</a></li>
                </ul>}
                <li><NavLink to={'/dostavkaoplata'} title="Доставка и Оплата">Доставка и Оплата</NavLink></li>
                <li><NavLink to={'/galereya'} title="Фотогалерея">Фотогалерея</NavLink></li>
                <li><NavLink to={'/kontakt'} title="Контакты">Контакты</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu