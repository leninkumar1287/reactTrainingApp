import React, { useState } from 'react'
import { postAdduser } from './services/ProductService'
import { useNavigate } from 'react-router-dom'

export default function AddNewUser() {
    let [payload, setPayload] = useState({ userName: '', age: '', city: '', image: '' })
    const navigate = useNavigate();
    const handler = (event) => {
        console.log(" event  : ", event )
        console.log(" evenet.tartget : ", event.target)
        const {name, value }= event.target
        setPayload({...payload,[name]:value})
    }

    const postData = (event) => {
        event.preventDefault();
        console.log(" state value : ", payload)
        postAdduser(payload)
        .then(res => {
            if(res.data){
                alert(" new user added")
                navigate('/products')
            }
        })

    }
    return (
        <div>
            <h2> Add New User </h2>
            <form onSubmit={handler}>
                <div className='form-group'>
                    <label> User Name </label>
                    <input type="text" name="userName" className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <label> Age </label>
                    <input type="text" name="age" className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <label> City </label>
                    <input type="text" name="city" className='form-control' onChange={handler}></input>
                </div>
                <div className='form-group'>
                    <label> Image URL </label>
                    <input type="text" name="image" className='form-control' onChange={handler}></input>
                </div>
                <input type='submit' value='Add New user' className='btn btn-success' onClick={postData}></input>
            </form>

        </div>
    )
}
