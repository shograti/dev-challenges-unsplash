import styles from "./styles.module.css"
import Header from "./header"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
        </div >
    )
}

export default Layout