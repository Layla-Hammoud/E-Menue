import "./card.css"
import Pizza from './pizza.jpg'
import HeartIcon from './heart-regular.svg'
import ShoppingIcon from './cart-plus-solid.svg'
import FillHeartIcon from './heart-solid.svg'
import { useState } from "react"
function Card() {
    const [isAddedToFavorite,setIsAddedToFavorite]=useState<Boolean>(false);
    return (
        <>
        <div className="card">
            <div><img className="product-image" src={Pizza}/></div>
            <p className="text-card">Brand Name</p>
            <p className="text-card">description</p>
            <p className="text-card">price</p>
            <div className="icon-group">
                <div>
                   <img className="icon" src={isAddedToFavorite? FillHeartIcon : HeartIcon} onClick={()=>setIsAddedToFavorite(!isAddedToFavorite)}/>
                </div>
                <div>
                    <img className="icon" src={ShoppingIcon}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card