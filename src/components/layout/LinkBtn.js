import styles from './LinkBtn.module.css'

import { Link } from 'react-router-dom'

function LinkBtn({ page, text}){
    return (
        <button className={styles.btnStart}><Link to={page}>{text}</Link></button>
    )
}

export default LinkBtn