import styles from './Home.module.css'

import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { GiPayMoney } from 'react-icons/gi'
import { TbNews } from "react-icons/tb";

function Home() {
    return (
        <main className={styles.main_container}>
            <div className={styles.title_and_cards}>
                <article className={styles.title}>
                    <h1>Simplifique suas finanças</h1>
                    <p>Gerencie, localize gastos e aumente seus aportes com facilidade</p>
                </article>
                <section className={styles.card_container}>
                    <article>
                        <GiPayMoney />
                        <h2>Controle de gastos</h2>
                        <p>Gerencie desde as pequenas saidas até valores maiores das movimentações da sua conta bancária.</p>
                    </article>
                    <article>
                        <FaMoneyBillTrendUp />
                        <h2>Insights de investimentos</h2>
                        <p>Visualize com clareza a valorização dos seus ativos por meio de nossa página.</p>
                    </article>
                    <article>
                        <TbNews />
                        <h2>Notícias do mercado</h2>
                        <p>Acompanhe as principais notícias do mercado financeiro para não ficar por fora.</p>
                    </article>
                </section>
            </div>

        </main>
    )
}

export default Home