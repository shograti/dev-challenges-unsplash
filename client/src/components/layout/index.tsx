import styles from "./styles.module.css"
import Header from "./header"
import { Outlet } from "react-router"

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>  <Outlet /></main>
        </div >
    )
}

export default Layout