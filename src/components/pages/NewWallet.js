import { useState } from 'react'

import styles from './NewWallet.module.css'

import LinkBtn from '../layout/LinkBtn'
import Input from '../form/Input'

function NewWallet() {
    const [row, setRow] = useState([])

    function criaLinha() {
        setRow(row => (
            [{ ticker: "", preco_medio: 0, quantidade: 0 }, ...row]
        ))
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
                                row.map(row => (
                                    <tr>
                                        <td><Input
                                            type='text'
                                            name='ticker'
                                            placeholder='Ticker'
                                        /></td>
                                        <td><Input
                                            type='number'
                                            name='preco_medio'
                                            placeholder='Preço médio'
                                        /></td>
                                        <td><Input
                                            type='number'
                                            name='quantidade'
                                            placeholder='Quantidade'
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