import styles from './NavBar.module.css'

import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

function NavBar(){
    return (
        <header className={styles.container}>
            <Link to='/'><img src={logo} alt='logo'/></Link>
            <ul>
                <li> <Link to='/'>Home</Link> </li>
                <li> <Link to='/wallet'>Carteira</Link> </li>
                <li> <Link to='/dashboard'>Dashboard</Link> </li>
            </ul>
        </header>
    )
}

export default NavBar