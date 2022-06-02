import styles from './main_header.module.css'
import logo from '../../../images/logo.png'
import slideOne from '../../../images/motoblok_slide.jpg'
import { useState } from 'react'
import { MenuContainer } from '../../menu/menu container'
import { NavLink } from 'react-router-dom'

const MainHeader = (props) => {
	const [show, setShow] = useState(false)
	const [mediaShow, mediaSetShow] = useState(false)
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
					{show && <MenuContainer />}
					
				</div>
			</div>
			<div className={styles.navMedia}>
				<img src={slideOne} />
					<span className={styles.mobileMenuIcon} onClick={() => mediaSetShow(!mediaShow)}>
						<div id="mbi-div1"></div>
						<div id="mbi-div2"></div>
						<div id="mbi-div3"></div>
					</span>
				<div className={styles.mediaMenu}>
					{mediaShow && <MenuContainer />}
				</div>
			</div>


		</div>
	)
}

export default MainHeader