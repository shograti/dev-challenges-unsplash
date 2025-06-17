import styles from './styles.module.css'

function CollectionCard({ collection }) {
    const collectionLength = collection.items.length;
    console.log(collection.name)

    return (
        <div className={styles.container}>
            {collectionLength === 1 && (
                <div className={styles.card} style={{ backgroundColor: 'lightblue', minWidth: '100px', minHeight: "100px" }}></div>
            )}
            {collectionLength === 2 && (
                <div className={styles.card_with_two}>
                    <div style={{ backgroundColor: 'lightblue', minWidth: '100px', minHeight: "100px" }}></div>
                    <div style={{ backgroundColor: 'lightgreen', minWidth: '100px', minHeight: "100px" }}></div>
                </div>
            )}
            {collectionLength > 2 && (
                <div className={styles.card_with_many}>
                    <div style={{ backgroundColor: 'lightblue', minWidth: '100px', minHeight: "100px", }}></div>
                    <div style={{ backgroundColor: 'lightgreen', minWidth: '100px', minHeight: "100px" }}></div>
                    <div style={{ backgroundColor: 'lightcoral', minWidth: '100px', minHeight: "100px" }}></div>
                </div>
            )}
            <div className={styles.text_container}>
                {collection.name && <h2>{collection.name}</h2>}
                <p>{collectionLength} {collectionLength > 1 ? 'photos' : 'photo'}</p>
            </div>
        </div>
    );
}

export default CollectionCard