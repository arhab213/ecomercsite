import { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import Items from '../../src/component /ShopItems/Items'
import ItemsInCart from '../../src/component /ItemsIncart/ItemsInCart'
import { Contexts } from '../../context'
function Products(props){
const {cartarray,remove,changeQte,hidcart,sethidcart,total,Total}=Contexts()
let [prods,setprods]=useState(null)
    const getApi=async()=>{
        const res= await axios.get('https://dummyjson.com/products')
        if(!res){
            return alert("erreur api disconected")
        }
        setprods(res.data.products);
    }
    useEffect(()=>{
        getApi()
    },[])


 
    

    return(
        <> 
        <i id='Cart' className="fa-solid fa-cart-shopping" onClick={()=>sethidcart(!hidcart)} ></i>
        { hidcart ? (<div className='Cart'>
        <h3 id='total'>total : {Total} $</h3>

          {
            cartarray.map((e,i)=>{return <ItemsInCart element={e} index={i} remove={remove} changeQte={changeQte} />})
            }
          
      </div>):null}
        <div id='shopContainer'>
            { prods ?(prods.map((e)=>{return(<Items element={e} />)})):null}
        </div>
        
     
      
        </>
    )


}
export default Products