import React from 'react'
import { useParams } from 'react-router-dom'
export default function Category() {
    let {cn}=useParams();
  return (
    <div>
         <h2> Category : {cn}</h2>
    </div>
  )
}
