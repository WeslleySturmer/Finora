import { useState, useEffect } from 'react'

import styles from './Wallet.module.css'

import LinkBtn from '../layout/LinkBtn'
import WalletCard from '../layout/WalletCard'

function Wallet(){
    const [ wallets, setWallets ] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/wallets', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            setWallets(data)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <main className={styles.container}>
            <header>
                <h1>Carteiras</h1>
                <LinkBtn page='/new_wallet' text='Criar carteira' />
            </header>
            <section>
                {wallets.map(wallet => (
                    <WalletCard 
                    description={wallet.description} 
                    assets={wallet.assets}
                    />
                ))}
            </section>
        </main>
    )        
}

export default Wallet