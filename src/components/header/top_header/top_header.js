import React from 'react'
import styles from './top_header.module.css'
import novIcon1 from '../../../images/nav_icon1.png'
import novIcon2 from '../../../images/nav_icon2.png'
import novIcon6 from '../../../images/nav_icon6.png'
import { NavLink } from 'react-router-dom'

const TopHeader = () => {
    return (
        <div className={styles.novigateBlock}>
		<ul>
			<li>
                <NavLink to={'/'} title="Домашняя страница">
                    <img src={novIcon1} width="36" height="36" alt="Домашняя страница" />
                </NavLink>
            </li>
			<li>
                <NavLink to={'/kontakt'} title="Контактная информация">
                    <img src={novIcon2} width="36" height="36" alt="Контактная информация" />
                </NavLink>
            </li>
            <li className={styles.last}>
                <span>тел. мобильный: +38 (050) 788 76 95</span>
            </li>
		</ul>
	</div>
    )
}

export default TopHeader