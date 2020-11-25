import React from 'react'
import { useStateValue } from '../StateProvider'
import Mobiles from './Mobiles'
import {getBasketTotal} from "../reducer"
import { Button } from '@material-ui/core'
import "./css/Cart.css"

function Cart() {
    const [{basket}]= useStateValue()
    const handleClick=()=>{
        alert(`Rupees ${getBasketTotal(basket)} paid Successfuly`)

    }
    return (
        <div className="cart">
            <div className="cart_bill">
                    <h2>You Bill:₹{getBasketTotal(basket)}</h2>
                    <Button onClick={handleClick}>PAY NOW</Button>
            </div>

             <div className="body">
                {
                    basket.map(mobile=>(
                        <Mobiles key={mobile.id} id={mobile.id} name={mobile.name} desc={mobile.desc} price={mobile.price} image={mobile.image} remove={true}/>

                    ))
                }

            </div>
        </div>
    )
}

export default Cart
