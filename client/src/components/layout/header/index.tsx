import styles from "./styles.module.css"
import logo from "../../../assets/logo.svg"
import { Link, useLocation } from "react-router";

function Header() {
    const location = useLocation()
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <nav>
                <ul className={styles.nav_list}>
                    <li className={location.pathname === "/" ? styles.active : ""}><Link to="/">Home</Link></li>
                    <li className={location.pathname === "/collections" ? styles.active : ""}><Link to="/collections">Collections</Link></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header