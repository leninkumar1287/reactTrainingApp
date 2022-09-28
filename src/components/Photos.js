import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function Photos() {
    const [payLoad,setUserData]=useState([]);
    useEffect(()=>{
        const API="https://jsonplaceholder.typicode.com/photos";
        axios.get(API)
        .then(res=>{
            console.log(res.data);
            setUserData(res.data)
        })
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <h2> Photos</h2>
        <table className='table'>
            <tr>
                <th> Id </th><th> Album Id</th><th> Title </th> <th> URL </th> <th> thumbnailURL </th>
            </tr>
            {payLoad?.map((photos,ind)=>
            <tr key={photos.id}>
                <td> {ind+1}</td>
                <td> {photos.albumId}</td>
                <td> {photos.title} </td>
                <td> {photos.url} </td>
                <td> {photos.thumbnailUrl} </td>

            </tr>)}
        </table>
    </div>
  )
}


