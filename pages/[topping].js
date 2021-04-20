import Router from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const base = () => {
    const router = useRouter()
    console.log(router.query)

    return (
        <div className={styles.base}>
            <div>You have choosen {router.query.topping}</div>
            <h4>Step 2: Choose Your Topping</h4>            
        </div>
    )
}

export default base