import styles from './WalletCard.module.css'

import LinkBtn from './LinkBtn'

function WalletCard({ description, tickers}){
    return (
        <article className={styles.container}>
            <h3>{description}</h3>
            <p>Valor de carteira: </p>
            {tickers.map(ticker => (
                <p>{ticker}</p>
            ))}
            <LinkBtn to='#' text='Ver mais' />
        </article>
    )
}

export default WalletCard