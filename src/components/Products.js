import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllUsers, deleteUserById } from './services/ProductService';

export default function Products() {
    const [proData, setProData] = useState([]);
    useEffect(() => {
        getAllUsers()
            .then(res => {
                console.log(res.data)
                setProData(res.data)
            })
    }, [])
    const delPro = (product) => {
        console.log(" product : ", product)
        if (window.confirm(`Do u want to delete the product : ${product.userName} ?`)) {
            deleteUserById(product.id)
                .then(res => {
                    console.log(" inside  : ")
                    if (res.data) {
                        alert("Product Deleted");
                        // eslint-disable-next-line
                        let data = proData.filter(pro => product.id !== product.id);
                        setProData(data);
                        getAllUsers()
                            .then(res => {
                                setProData(res.data)
                            })
                    }
                })
        }
    }

    const addToCart = (prod) => {
        console.log(localStorage)
        if (localStorage.getItem('mycart') != undefined) {
            let cartBucket = JSON.parse(localStorage.getItem('mycart'))
            if (cartBucket.includes(prod.id)) {
                alert(" product already added in cart ")
            }
            else
                cartBucket.push(prod.id)
                localStorage.setItem('mycart', JSON.stringify(cartBucket))
                alert(" product added to the cart successfully ")

        }
        else {
            let cartBucket = [];
            cartBucket.push(prod.id)
            localStorage.setItem('mycart', JSON.stringify(cartBucket))
            alert("product added to the cart successfully")

        }
    }

    return (
        <div>
            <h2> Product </h2>
            <Link to="/adduser" className='btn btn-primary'> Add users</Link>
            {/* <input type={text} ></input> */}
            <div className='row'>{proData?.map(pro =>
                <div className="col-sm-4 card" style={{ width: '18rem' }}>
                    <img src={pro.image} className="card-img-top" alt="SuperImages" width={200} height={150} />
                    <div className="card-body">
                        <h5 className="card-title">{pro.userName}</h5>
                        <p className="card-text">City : {pro.city} <br />
                            id : {pro.id} <br />
                            Age : {pro.age} </p>
                        <Link to={`/edit/${pro.id}`} className="btn btn-primary"> Edit</Link>
                        <button className='btn btn-danger' onClick={() => delPro(pro)}> Delete</button>
                        <button className='btn btn-primary' onClick={() => addToCart(pro)}> Add to Card </button>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}