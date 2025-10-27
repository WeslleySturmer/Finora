function WalletCard(wallet){
    return (
        <div>
            <h3>{wallet.name}</h3>
            <p>{wallet.value}</p>
        </div>
    )
}

export default WalletCard