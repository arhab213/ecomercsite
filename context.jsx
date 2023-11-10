import { createContext,useContext,useState,useEffect } from "react";
const context =createContext(null)
export const Contexts=()=> useContext(context)
function Contextprovider(props){
    let {children}=props
    let [cartarray,setcartarray]=useState([])
    let [hidcart,sethidcart]=useState(false)
    let [Total,setTotal]=useState(0)
    const remove=(index)=>{
        let tmp=[...cartarray]
        tmp.splice(index,1)
        setcartarray(tmp)
        }
    const getIncrat=(elemnt)=>{
            elemnt.qte=1
            setcartarray([...cartarray,elemnt])
          }
    const changeQte=(elem,index)=>{
            cartarray[index].qte=elem.current.value
            total()
        } 
    const total=()=>{
            let total=0
          cartarray.map((e)=>{
            total+=parseInt(e.qte)*parseInt(e.price)
          })
          setTotal(total)
        }
    useEffect(()=>{
            total()
              },[cartarray])
        
  let val={cartarray,setcartarray,hidcart,sethidcart,Total}
  let func={remove,getIncrat,changeQte,total}
  let all ={...val,...func}
return <context.Provider value={all}>{children}</context.Provider>
}
export default Contextprovider