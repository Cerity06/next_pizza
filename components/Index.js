import React from 'react'
import { useState } from 'react'
import Base from './Base'

const Index = () => {
    const [base, setBase] = useState([]);
    const [topping, setTopping] = useState([]);
    const [order, setOrder] = useState(false);

    return (
        <div>
            <Base base={setBase} />
        </div>
    )
}

export default Index
