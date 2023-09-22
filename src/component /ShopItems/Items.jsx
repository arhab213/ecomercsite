import { useState } from 'react'
import './Items.css'
import { useNavigate } from 'react-router-dom'
function Items(props){

    let {element,addtocart}=props
    let navigate=useNavigate()
    let {title,price,thumbnail,id}=element

    return(<>      <div className='ShopItem'>
                    <div className="ProductsTitle">{title}</div>
                    <div className='ProductsPrice'>Price: {price} $</div>
                    <img className="ProductThumbnail" src={thumbnail}  />
                    <div id='BtnContainer'>
                    <button id='AddToCartBtn' onClick={()=>addtocart(element)}>Add to cart</button>
                    <button id='SeeMoreBtn' onClick={()=>navigate(`/Products/${id}`)}>SeeMore</button>
                    </div>
                    </div>
                    
                    </>)
}
export default Items