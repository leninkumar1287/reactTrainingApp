import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Todos() {
  const API = "https://jsonplaceholder.typicode.com/todos";
  const [payLoad, setPayload] = useState([])
  useEffect(() => {
    axios.get((API))
      .then(response => {
        setPayload(response.data)
      }).catch(error => {
        console.log("error : ", error);
      })
  }, [])
  return (
    <div>
      <h2>Todo's</h2>
      <table className='table'>
        <tr>
        <th>Id</th><th>userId</th><th>Title</th><th>Completed Status</th>
        </tr>
        {payLoad?.map((todo,ind)=>
            <tr key={todo.id}>
                <td> {ind+1}</td>
                <td> {todo.userId}</td>
                <td> {todo.title} </td>
                <td> {todo.completed.toString()} </td>
            </tr>
        )}
      </table>
    </div>
  )
}
