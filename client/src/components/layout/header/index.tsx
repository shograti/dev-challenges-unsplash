import styles from "./styles.module.css"
import logo from "../../../assets/logo.svg"

function Header() {
    const location = window.location.pathname;
    console.log("Current location:", location);
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <nav>
                <ul className={styles.nav_list}>
                    <li className={location === "/" ? styles.active : ""}>Home</li>
                    <li className={location === "/collections" ? styles.active : ""}>Collections</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header