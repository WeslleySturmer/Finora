import styles from './Home.module.css'

import { Link } from 'react-router-dom'

import { FaMoneyBillTrendUp, FaChartLine, FaComments, FaGear } from 'react-icons/fa6'
import { GiPayMoney } from 'react-icons/gi'
import { TbNews } from "react-icons/tb";

function Home() {
    return (
        <main className={styles.main_container}>
            <div className={styles.title_and_cards}>
                <section className={styles.title}>
                    <h1>Simplifique suas finanças</h1>
                    <p>Gerencie, localize gastos e aumente seus aportes com facilidade</p>
                    <button className={styles.btnStart}><Link to='/wallet'>Comece agora</Link></button>
                </section>

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

            <section className={styles.services}>
                <article>
                    <div>
                        <h3>Gráficos Dinâmicos</h3>
                        <p>Tenha uma visão clara e inteligente das suas finanças.
                            Nossos gráficos interativos transformam dados complexos em informações simples e visuais, facilitando o acompanhamento da sua evolução financeira.
                            Analise gastos, acompanhe lucros e entenda suas movimentações de forma dinâmica e intuitiva tudo em um só lugar.</p>
                    </div>
                    <FaChartLine />
                </article>

                <article>
                    <FaGear />
                    <div>
                        <h3>Sempre atentos a melhorias</h3>
                        <p>No Finora, acreditamos que gestão financeira também é evolução.
                            Por isso, estamos constantemente aprimorando nossos recursos para oferecer a melhor experiência possível.
                            Seja através de novas funcionalidades, ajustes de performance ou refatoração de recursos já existentes, nosso foco é garantir eficiência, estabilidade e praticidade em cada detalhe.</p>
                    </div>
                </article>

                <article>
                    <div>
                        <h3>Suporte multiplataforma</h3>
                        <p>Seu controle financeiro precisa estar com você, onde quer que esteja.
                            O Finora foi pensado para funcionar perfeitamente em diferentes dispositivos, garantindo uma experiência fluida tanto no computador quanto no celular ou tablet.
                            Além disso, nosso suporte está sempre disponível para te ajudar de forma ágil e personalizada, independente da plataforma que você escolher usar.</p>
                    </div>
                    <FaComments />
                </article>

                <button className={styles.btnStart}><Link to='/wallet'>Comece agora</Link></button>
            </section>

        </main>
    )
}

export default Home