import { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import Items from '../../src/component /ShopItems/Items'
import ItemsInCart from '../../src/component /ItemsIncart/ItemsInCart'
function Products(props){
let [prods,setprods]=useState(null)
let [Total,setTotal]=useState(0)
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
   
    let [hidcart,sethidcart]=useState(false)
    let [cartarray,setcartarray]=useState([])
    useEffect(()=>{
        total()
        },[cartarray])
    const getIncrat=(elemnt)=>{
      elemnt.qte=1
      setcartarray([...cartarray,elemnt])
    }
    const remove=(index)=>{
    let tmp=[...cartarray]
    tmp.splice(index,1)
    setcartarray(tmp)
    }
    const total=()=>{
        let total=0
      cartarray.map((e)=>{
        total+=parseInt(e.qte)*parseInt(e.price)
      })
      setTotal(total)
    }
    const changeQte=(elem,index)=>{
        cartarray[index].qte=elem.current.value
        total()
    }

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
            { prods ?(prods.map((e)=>{return(<Items element={e} addtocart={()=>getIncrat(e)} />)})):null}
        </div>
        
     
      
        </>
    )


}
export default Products