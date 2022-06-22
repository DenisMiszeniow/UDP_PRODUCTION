import styles from '../menu/menu.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Menu = (props) => {
    const [showProducts, setShowProducts] = useState(false)
    const [showServices, setShowServices] = useState(false)
    const onClickProducts = () => {
        setShowProducts(!showProducts)
        if (showServices) setShowServices(false)
    }
    const onClickServices = () => {
            setShowServices(!showServices)
            if (showProducts) setShowProducts(false)
        }
    const closeMenu = () => props.handleClick()
    return (
        <div className={styles.menu}>
            <ul>
                <li><NavLink to={'/onas'} onClick={closeMenu} className={(navData) => navData.isActive ? styles.active : ""} title=" О нас">О Компании</NavLink></li>
                <li onClick={onClickProducts}><span>Продукция</span></li>
                {showProducts && <ul className={styles.submenu}>
                    {props.products.map(
                        (section) => {
                            return (
                                <li>
                                    <NavLink to={`/${section.section}`} onClick={closeMenu} className={(navData) => navData.isActive ? styles.active : ""} >
                                        {section.productPageTitle}
                                    </NavLink>
                                </li>
                            )
                        }
                    )
                    }
                </ul>}
                <li onClick={onClickServices} className={(navData) => navData.isActive ? styles.active : ""}><span>Услуги</span></li>
                {showServices && <ul className={styles.submenu}>
                {props.services.map(
                        (service) => {
                            return (
                                <li>
                                    <NavLink to={`/${service.endPoint}`} onClick={closeMenu} className={(navData) => navData.isActive ? styles.active : ""} >
                                        {service.serviceName}
                                    </NavLink>
                                </li>
                            )
                        }
                    )
                    }
                </ul>}
                <li><NavLink to={'/dostavkaoplata'} onClick={closeMenu} className={(navData) => navData.isActive ? styles.active : ""} title="Доставка и Оплата">Доставка и Оплата</NavLink></li>
                <li><NavLink to={'/kontakt'} onClick={closeMenu} className={(navData) => navData.isActive ? styles.active : ""} title="Контакты">Контакты</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu