import styles from "./styles.module.css"
import searchIcon from "../../assets/search-icon.svg"

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <h1>Search</h1>
                <p>Seach high-resolution images from Unsplash</p>
                <div className={styles.search_input}>
                    <input placeholder="Enter your keywords..." type="text" />
                    <img src={searchIcon} alt="" className={styles.search_icon} />
                </div>
            </div>
        </div>
    )
}

export default Home