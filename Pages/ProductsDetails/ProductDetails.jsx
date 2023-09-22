import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from '../../src/component /Slider/Slider'
import ItemsInCart from '../../src/component /ItemsIncart/ItemsInCart'
function ProductDet(props){
    let {id}=useParams()
     
    let navigate=useNavigate()
    useEffect(()=>{
        getAPI(id)
    },[])
    let [detail,setdetail]=useState(null)
 const getAPI=async(id)=>{
    const res=await axios.get(`https://dummyjson.com/products/${id}`)
   if(!res){
    return alert('Erreur API')
   }
   setdetail(res.data)
   console.log(res.data)
 }

return(<>
  
   {detail ? (<div id='ProductDetails'>
    <div >
    <div className='TitleProduct'>{detail.title}</div>
    <img id='ProductImage' src={detail.thumbnail} />
    <div id='PriceProduct'> {detail.price},00 $</div>
    <div id="ProductsDescription">{detail.description}</div>
    <div id='Buttons'>
    <button id='BackBtn' onClick={()=>navigate(`/Products`)}>Back</button>
    <button id='AddToCartBtn'   >Add To Cart</button>
    </div>
    </div>
    <div id='MoreImages'><p>More images : </p>{<Slider images={detail.images}/>}</div>
   </div>):null}
  
 
</>)
}
export default ProductDet