import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Albums() {
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        const API="https://jsonplaceholder.typicode.com/albums";
        axios.get(API)
        .then(res=>{
            console.log(res.data);
            setUserData(res.data)
        })
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <h2> Album</h2>
        <table className='table'>
            <tr>
                <th> Id </th><th> userId</th><th> Title</th>
            </tr>
            {userData?.map((album,ind)=>
            <tr key={album.id}>
                <td> {ind+1}</td>
                <td> {album.userId}</td>
                <td> {album.title} </td>
            </tr>)}
        </table>
    </div>
  )
}
