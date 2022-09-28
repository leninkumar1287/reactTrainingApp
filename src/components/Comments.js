import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Comments() {
    const [payLoad, setPayload] = useState([]);
    useEffect(() => {
        const API = 'https://jsonplaceholder.typicode.com/comments'
        axios.get(API)
            .then(response => {
                console.log(response.data)
                setPayload(response.data)
            }).catch(error => {
                console.log(error)
            })

    }, [])
    return (
        <div>
            <h2>User Comments</h2>
            <table className='table'>
                <tr>
                    <th> Id no </th><th> post id </th><th> Name </th><th> Email </th><th> Body </th>
                </tr>
                {payLoad?.map((comments, ind) =>
                    <tr key={comments.id}>
                        <td> {ind + 1}</td>
                        <td> {comments.postId}</td>
                        <td> {comments.name} </td>
                        <td> {comments.email} </td>
                        <td> {comments.body}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}
