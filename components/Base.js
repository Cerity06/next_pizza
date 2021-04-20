import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Base = () => {
    const [validate, setValidate] = useState(false)
    const [baseChoisie, setBaseChoisie] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value)
        setBaseChoisie(event.target.value)
    }


    return (
        <>
            <select onChange={handleChange}>
                <option value='light'>Léger</option>
                <option value='classic'>Classic</option>
                <option value='extra'>Extra</option>
            </select>
            <Link as={`${baseChoisie}`} href='[topping]'>{baseChoisie}</Link>
        </>
    )
}

export default Base
