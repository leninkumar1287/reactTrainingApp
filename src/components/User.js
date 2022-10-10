import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function User() {
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        const API="https://jsonplaceholder.typicode.com/users";
        axios.get(API)
        .then(res=>{
            console.log(res.data);
            setUserData(res.data)
        })
        .catch(err=> console.log(err))
    },[])
  return (
    <div>
        <h2> Users Data</h2>
        <table className='table'>
            <tr>
                <th> S.no</th><th> Name</th><th> Email</th><th> Phone</th><th>Website</th>
            </tr>
            {userData?.map((user,ind)=>
            <tr key={user.id}>
                <td> {ind+1}</td>
                <td> {user.name}</td>
                <td> {user.email} </td>
                <td> {user.phone} </td>
                <td> {user.website}</td>
            </tr>)}
        </table>
    </div>
  )
}
