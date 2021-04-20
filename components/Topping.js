import React from 'react'
import Link from 'next/link'

const Topping = () => {
    const [validate, setValidate] = useState(false);
    const [toppings, setToppings] = useState([]);

    const listItems = 

    const OnSelect = (item) => {
        setToppings(
            [...toppings],
            item,
            )
    }



    return (
        <>
            <ul> 
                <li><span>Cheese</span></li>
                <li><span>Onions</span></li>
                <li><span>Tomatoes</span></li>
                <li><span>Mushrooms</span></li>
                <li><span>Ham</span></li>
                <li><span>Peperroni</span></li>
                <li><span>Egg plant</span></li>
            </ul>
            {toppings && <button></button>}
        </>
    )
}

export default Topping
