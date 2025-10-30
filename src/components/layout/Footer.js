import styles from './Footer.module.css'

import logo from '../../img/logo.png'

import { FaLinkedin, FaGithub, FaWhatsapp, FaGmail } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={styles.container}>
            <section>
                <h2>Minhas redes</h2>
                <div>
                    <a href='https://www.linkedin.com/in/weslleywsturmer/' target='_blank' ><FaLinkedin /></a>
                    <a href='https://github.com/WeslleySturmer' target='_blank' ><FaGithub /></a>
                    <a href='https://wa.me/5549991031006' target='_blank' ><FaWhatsapp /></a>
                    <a href='mailto:weslley.w.sturmer@gmail.com' target='_blank' ><MdEmail /></a>
                </div>
                <p>© 2025 Finora. Todos os direitos reservados.</p>
            </section>

            <section>
                <nav>
                    <Link to='/'><img src={logo} alt='Logo Finora' className={styles.logo} /></Link>
                    <ul>
                        <li> <Link to='/'>Home</Link> </li>
                        <li> <Link to='/wallet'>Carteira</Link> </li>
                        <li> <Link to='/dashboard'>Dashboard</Link> </li>
                        <li> <Link to='/aboutus'>Sobre nós</Link> </li>
                    </ul>
                </nav>
            </section>
        </footer>
    )
}

export default Footer