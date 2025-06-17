import styles from "./styles.module.css"

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <h1>Search</h1>
                <p>Seach high-resolution images from Unsplash</p>
                <input placeholder="Enter your keywords..." type="text" />
            </div>
        </div>
    )
}

export default Home