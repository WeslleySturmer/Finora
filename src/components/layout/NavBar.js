import styles from './NavBar.module.css'

import { Link } from 'react-router-dom'

import logo from '../../img/logo.png'

function NavBar(){
    return (
        <header className={styles.container}>
            <nav>
                <Link to='/'><img src={logo} alt='Logo Finora'/></Link>
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/wallet'>Carteira</Link> </li>
                    <li> <Link to='/dashboard'>Dashboard</Link> </li>
                </ul>
                <Link to='/aboutus'>Sobre nós</Link>
            </nav>
        </header>
    )
}

export default NavBar