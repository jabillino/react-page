import logo from "../../assets/logo.png"
import styles from "./navbar.module.css"
import lineas from "../../assets/lines.png"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="react" className={styles.logo} />
            <div className={styles.desplegable}>
                <img src={lineas} alt="lines" className={styles.lineas} />
                <ul className={styles.menu}>
                    <li className={styles.menu_item}>
                        <a href="/Home">inicio</a>
                    </li>
                    <li className={styles.menu_item}>
                        <a href="/sabermas">Productos</a>

                        <ul className={styles.submenu}>
                            <li className={styles.submenu_item}>
                                <a href="/zapatoshombre">zapatos hombre</a>
                            </li>
                            <li className={styles.submenu_item}>
                                <a href="/zapatosMujer">zapatos mujer</a>
                            </li>
                            <li className={styles.submenu_item}>
                                <a href="/zapatosniños">zapatos niños</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.menu_item}>
                        <a href="/about">Acerca de</a>
                    </li>
                    <li className={styles.menu_item}>
                        <a href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar