
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Learn() {
    const [product, setProduct] = useState([])
    const [sortedData, setSortedData] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((data) => {
                console.log(data.data)
                setProduct(data.data)
                setSortedData(data.data)
            })
    }, [])

    const handleAsc = () => {
        const sort = [...sortedData].sort((a,b) => a.price - b.price)
        setProduct(sort)
    }

    const handleDesc = () => {
        const sort = [...sortedData].sort((a,b) => b.price - a.price)
        setProduct(sort)

    }


    return (
        <div>

            <div  > 
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc} >Desc</button>
            </div>

            <div>
                {product.map((item) => {
                    return (< div key = {item.id}>
                        <img width="100px" height="100px" src={item.image} alt="" />
                        <h1>{item.category}</h1>
                        <p>{item.price}</p>
                    </div>)
                })}
            </div>

        </div>
    )
}

