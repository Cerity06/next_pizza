import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const NavBar = () => {
    return (
        <nav>
            <div className={styles.logo}><Link href="/"><h2>Pizza</h2></Link></div>
            <div className={styles.signature}><h3>The traditional pizza</h3></div>
        </nav>
    )
}

export default NavBar
