import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from './services/ProductService';

export default function UpdateProductDetails() {
  let [dataPayload, setDataPayload] = useState({})
  let {id} = useParams();
  useEffect(()=>{
    console.log(" dataPayload : ", dataPayload)

    getUserById(id)
    .then(res=>{
        if(res.data){
          setDataPayload(res.data);
          console.log(" dataPayload : ", dataPayload)
        }
    })
},[])


  return (
    <div>
      <h2> Edit the product details and Update </h2>
      <div className='form '>
        <h1>hi</h1>
      </div>
    </div>
  )
}
