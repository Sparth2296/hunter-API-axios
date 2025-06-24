import axios from 'axios';
import './Mycomponent.css'
import React, { useEffect, useState } from 'react'

const Mycomponent = () => {
    const [product,setProduct] = useState([])

   async function show(){
        const respones = await axios.get('https://dummyjson.com/products/search?q=phone');
        
        setProduct(respones.data.products);
    }

    useEffect(()=>{
        show()
    },[])
    
        console.log(product);
        
  return (
    <div>
     <nav>
         <h1>Products Card</h1>
     </nav>

       <div className="container">
        {
        product.map((val)=>{
            return(
                <div className="card">
        <div className="product-card">
            <img src={val.thumbnail} alt="product-img" />
        </div>
        <div className="detailes">
            <h2>{val.title}</h2>
            <strong>{val.price}</strong>
            <strong>{val.brand}</strong>
            <p>{val.description}</p>
        </div>
     </div>
            )
        })
      }
       </div>
      
    </div>
  )
}

export default Mycomponent
