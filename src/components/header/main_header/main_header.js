import styles from './main_header.module.css'
import logo from '../../../images/logo.png'
import slideOne from '../../../images/motoblok_slide.jpg'
import { useState } from 'react'
import Menu from '../../menu/menu'

const MainHeader = () => {
	const [show, setShow] = useState(false)
	const [mediaShow, mediaSetShow] = useState(false)
	return (
		<div className={styles.header} >
			<div>
				<a href="index.html" title="УКРДЕТАЛЬПРОМ"><img src={logo} className={styles.logo} width="250" alt="УКРДЕТАЛЬПРОМ" /></a>
				<div className={styles.navMediaLeft}>
					<a className={styles.desktopMenuIcon} href="#" onClick={() => setShow(!show)}>
						<div id="mbi-div1"></div>
						<div id="mbi-div2"></div>
						<div id="mbi-div3"></div>
					</a>
					{show && <Menu />}
					
				</div>
			</div>
			<div className={styles.navMedia}>
				<img src={slideOne} />
					<a className={styles.mobileMenuIcon} href="#" onClick={() => mediaSetShow(!mediaShow)}>
						<div id="mbi-div1"></div>
						<div id="mbi-div2"></div>
						<div id="mbi-div3"></div>
					</a>
				<div className={styles.mediaMenu}>
					{mediaShow && <Menu />}
				</div>
			</div>


		</div>
	)
}

export default MainHeader