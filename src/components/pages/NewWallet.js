import { useState } from 'react'

import styles from './NewWallet.module.css'

import LinkBtn from '../layout/LinkBtn'
import Input from '../form/Input'

function NewWallet() {
    const [row, setRow] = useState([])
    const [wallet, setWallet] = useState({})
    const [description, setDescription] = useState()

    function criaLinha() {
        setRow([...row, { ticker: "", preco_medio: 0, quantidade: 0 }])
    }

    function handleChangeDesc(e) {
        setDescription(e.target.value)
    }

    function handleChangeTab(e, index) {
        let { name, value } = e.target
        let updatedRow = [...row]
        updatedRow[index][name] = value
        setRow(updatedRow)
    }

    function handleSave() {


        setWallet({
            ...wallet, wallet: {
                description: description,
                assets: row
            }
        })
    }

    return (
        <main className={styles.container}>
            <header>
                <h1>Nova carteira</h1>
                <LinkBtn page='/wallet' text='Voltar' />
            </header>
            <section>
                <form>
                    <Input
                        type='text'
                        text='Descrição da carteira'
                        name='description'
                        placeholder='Digite o nome da carteira'
                        handleOnChange={handleChangeDesc}
                    />

                    <table>
                        <thead>
                            <tr>
                                <th>Ticker</th>
                                <th>Preço médio</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {row && (
                                row.map((row, index) => (
                                    <tr>
                                        <td><Input
                                            type='text'
                                            name='ticker'
                                            placeholder='Ticker'
                                            handleOnChange={(e) => handleChangeTab(e, index)}
                                        /></td>
                                        <td><Input
                                            type='number'
                                            name='preco_medio'
                                            placeholder='Preço médio'
                                            handleOnChange={(e) => handleChangeTab(e, index)}
                                        /></td>
                                        <td><Input
                                            type='number'
                                            name='quantidade'
                                            placeholder='Quantidade'
                                            handleOnChange={(e) => handleChangeTab(e, index)}
                                        /></td>
                                    </tr>
                                ))
                            )}
                            <tr>
                                <td><input type='button' value='+' onClick={criaLinha}></input></td>
                            </tr>
                        </tbody>
                    </table>

                    <LinkBtn page='/wallet' text='Salvar' />

                </form>
            </section>
        </main>
    )
}

export default NewWallet