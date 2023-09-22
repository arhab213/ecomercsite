import { useState } from 'react'
import './Items.css'
import { useNavigate } from 'react-router-dom'
import { Contexts } from '../../../context'
function Items(props){
    let {getIncrat}=Contexts()
    let {element}=props
    let navigate=useNavigate()
    let {title,price,thumbnail,id}=element

    return(<>      <div className='ShopItem'>
                    <div className="ProductsTitle">{title}</div>
                    <div className='ProductsPrice'>Price: {price} $</div>
                    <img className="ProductThumbnail" src={thumbnail}  />
                    <div id='BtnContainer'>
                    <button id='AddToCartBtn' onClick={()=>getIncrat(element)}>Add to cart</button>
                    <button id='SeeMoreBtn' onClick={()=>navigate(`/Products/${id}`)}>SeeMore</button>
                    </div>
                    </div>
                    
                    </>)
}
export default Items