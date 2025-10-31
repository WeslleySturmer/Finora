import styles from './WalletCard.module.css'

import LinkBtn from './LinkBtn'

function WalletCard({ description, assets}){
    return (
        <article className={styles.container}>
            <h3>{description}</h3>
            <p>Valor de carteira: </p>
            {assets.map(asset => (
                <p>{asset}</p>
            ))}
            <LinkBtn to='#' text='Ver mais' />
        </article>
    )
}

export default WalletCard