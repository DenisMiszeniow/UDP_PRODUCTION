import styles from './top_header.module.css'
import novIcon1 from '../../../images/nav_icon1.png'
import novIcon2 from '../../../images/nav_icon2.png'
import novIcon6 from '../../../images/nav_icon6.png'

const TopHeader = () => {
    return (
        <div className={styles.novigate_block}>
		<ul>
			<li>
                <a href="index.html" title="Домашняя страница">
                    <img src={novIcon1} width="36" height="36" alt="Домашняя страница" />
                </a>
            </li>
			<li>
                <a href="kontakt.html" title="Контактная информация">
                    <img src={novIcon2} width="36" height="36" alt="Контактная информация" />
                </a>
            </li>
            <li>
                <a href="sitemap.html" title="Карта сайта">
                    <img src={novIcon6} width="36" height="35" alt="Карта сайта" />
                </a>
            </li>
		</ul>
	</div>
    )
}

export default TopHeader