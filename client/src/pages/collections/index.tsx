import CollectionCard from "./card"
import styles from "./styles.module.css"

const dummyCollections = [
    {
        name: "Collection A",
        items: new Array(10).fill(null).map((_, index) => ({
            id: index + 1,
        })),
    },
    {
        name: "Collection B",
        items: new Array(2).fill(null).map((_, index) => ({
            id: index + 1,
        })),
    },
    {
        name: "Collection C",
        items: new Array(3).fill(null).map((_, index) => ({
            id: index + 1,
        })),
    },
    {
        name: "Collection D",
        items: new Array(1).fill(null).map((_, index) => ({
            id: index + 1,
        })),
    },
];

function Collections() {
    console.log(dummyCollections)
    return (
        <div className={styles.container}>
            <h1>Collections</h1>
            <p className={styles.description}>Explore the world through collections of beautiful photos free to use under the <span>Unsplash License</span></p>
            <div className={styles.grid}>
                {dummyCollections.map((collection, index) => (
                    <CollectionCard key={index} collection={collection} />
                ))}
            </div>
        </div>
    )
}

export default Collections