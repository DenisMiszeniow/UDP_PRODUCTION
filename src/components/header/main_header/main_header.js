import styles from './main_header.module.css'
import logo from '../../../images/logo.png'

import { useState } from 'react'
import { MenuContainer } from '../../menu/menu container'
import { NavLink } from 'react-router-dom'
import BannerCarousel from './carousel_banner'

const MainHeader = (props) => {
const [show, setShow] = useState(false)
const handleClick = () => {
	setShow(!show)
}
	return (
		<div className={styles.header} >
			<div>
				<NavLink to={'/'} title="УКРДЕТАЛЬПРОМ"><img src={logo} className={styles.logo} width="250" alt="УКРДЕТАЛЬПРОМ" /></NavLink>
				<div className={styles.navMediaLeft}>
					<span className={styles.desktopMenuIcon} onClick={() => setShow(!show)}>
						<div id="mbi-div1"></div>
						<div id="mbi-div2"></div>
						<div id="mbi-div3"></div>
					</span>
					{show && <MenuContainer handleClick={handleClick} />}
				</div>
			</div>
			<div className={styles.navMedia}>
				<div style={styles}>
			<BannerCarousel/>
			</div>
					<span className={styles.mobileMenuIcon} onClick={() => setShow(!show)}>
						<div id="mbi-div1"></div>
						<div id="mbi-div2"></div>
						<div id="mbi-div3"></div>
					</span>
				<div className={styles.mediaMenu}>
					{show && <MenuContainer handleClick={handleClick}/>}
				</div>
			</div>


		</div>
	)
}

export default MainHeader