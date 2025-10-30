import styles from './AboutUs.module.css'

import logo from '../../img/logo.png'
import profile from '../../img/profile.jpeg'

function AboutUs() {
    return (
        <main className={styles.container}>
            <section>
                <article>
                    <h2>Sobre nós</h2>
                    <p>Na Finora, acreditamos que compreender o próprio dinheiro é o primeiro passo para conquistar liberdade.
                        Nosso propósito é simplificar o universo financeiro tornando o controle de investimentos, rendimentos e decisões econômicas acessível, visual e inteligente.
                        Vivemos em um tempo onde os dados estão por toda parte, mas nem sempre ao nosso favor. A Finora nasceu da ideia de transformar números em clareza. Através da tecnologia, oferecemos ferramentas que ajudam o usuário a visualizar sua vida financeira de forma integrada, compreensível e principalmente prática.
                        Nosso objetivo é ajudar pessoas a tomarem decisões conscientes, acompanhando seus investimentos, ganhos e metas com transparência e segurança. A Finora não é apenas uma plataforma: é uma parceira para quem quer crescer financeiramente com estratégia, simplicidade e inteligência.
                        Mais do que um sistema, somos uma iniciativa movida por curiosidade, inovação e propósito. Estamos construindo algo sólido e humano, que une automação e sensibilidade porque acreditamos que finanças não precisam ser complicadas, apenas bem compreendidas.
                    </p>
                </article>
                <aside>
                    <img src={logo} alt='Logo Finora' />
                </aside>
            </section>
            <section>
                <article>
                    <h2>Sobre o fundador</h2>
                    <p>Meu nome é Weslley Sturmann, fundador e desenvolvedor por trás da Finora.
                        Sou apaixonado por tecnologia, dados e pelo poder que o conhecimento financeiro tem de transformar realidades.
                        Tudo começou como um projeto pessoal, desenvolvido inicialmente em Ruby, com o sonho de criar um assistente que não apenas calculasse números, mas ajudasse de fato a entender o que cada número representa. Com o tempo, a Finora evoluiu e hoje está sendo reconstruída em React, com uma visão mais ampla, moderna e escalável.
                        Minha missão com este projeto vai além do código: quero unir design, inteligência artificial e automação para criar uma experiência digital que realmente empodere o usuário.
                        Cada linha de código escrita carrega uma ideia simples, mas poderosa fazer das finanças algo descomplicado, intuitivo e acessível para todos.
                    </p>
                </article>
                <aside>
                    <img src={profile} alt='Foto Weslley' />
                </aside>
            </section>
        </main>
    )
}

export default AboutUs