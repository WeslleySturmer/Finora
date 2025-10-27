import styles from './Wallet.module.css'

import LinkBtn from '../layout/LinkBtn'

function Wallet(){
    return (
        <main className={styles.container}>
            <header>
                <h1>Carteiras</h1>
                <LinkBtn page='/new_wallet' text='Criar carteira' />
            </header>
            <article>
                
            </article>
        </main>
    )        
}

export default Wallet