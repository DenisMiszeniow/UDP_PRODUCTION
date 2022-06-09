import React from 'react'
import footerLogo from '../../images/logo.png'
import styles from './footer.module.css'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={footerLogo} width="29" height="33" alt="ООО УКРДЕТАЛЬПРОМ" /> &copy; ukrdetalprom.com.ua 2022. All Right Reserved
        </div>
    )
}

export default Footer