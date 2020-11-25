import React from 'react'
import { useStateValue } from '../StateProvider'
import "./css/Body.css"
import Mobiles from './Mobiles'
function Body() {
    const [{mobiles}]= useStateValue()
    console.log(mobiles)
    return (
        <div className="body">
            <div>
                {
                    mobiles.map(mobile=>(
                        <Mobiles key={mobile.id} id={mobile.id} name={mobile.name} desc={mobile.desc} price={mobile.price} image={mobile.img}/>

                    ))
                }

            </div>


            
        </div>
    )
}

export default Body
