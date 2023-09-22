import { useRef } from 'react'
import './ItemsInCart.css'
function ItemsInCart (props){
let{element,index,remove,changeQte}=props
let ref = useRef(null)
return(
    <div id='ItemInCart'>
        <div id='dataContainer'>
        <div id='title'>{element.title}</div>
        <div id='brand'>{element.brand}</div>
        <div id='price'>{element.price}</div>
        </div>
        <div id='BtnContainer'>
            <input type="number"   ref={ref} onChange={()=>changeQte(ref,index)}/>
            <button onClick={()=>remove(index)}>remove</button>
        </div>
        
    </div>
)
}
export default ItemsInCart