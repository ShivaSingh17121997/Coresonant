import React, { useEffect, useState } from 'react'

export default function Filter() {
    const [product, setProduct] = useState([])
    const [sortedPorduct, setSortedProduct] = useState([])

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setSortedProduct(data)
                console.log(data)
            })
    }, [])

    const handleASc = () => {
        const sortedData = [...sortedPorduct].sort((a, b) => a.price - b.price)
        setProduct(sortedData)

    }

    const handleDesc = () => {
        const sortedData = [...sortedPorduct].sort((a, b) => b.price - a.price)
        setProduct(sortedData)

    }
    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase()

        const searchTerm = sortedPorduct.filter((item) => item.category.toLowerCase().includes(search) )
        setProduct(searchTerm)
    }

    return (
        <div>
            <div>
                <input onChange={handleSearch} type="text " placeholder='Serach...' />
            </div>
            <div>
                <button onClick={handleASc} >Sort Asc</button>
                <button onClick={handleDesc} >Sort Desc</button>
            </div>
            <div style={{ display: "grid", justifyContent: "space-evenly" }} >
                {product?.map((item) => {
                    return (
                        <>
                            <h3>{item.category}</h3>
                            <img width="100px" height="100px" src={item.image} alt="img" />
                            <p>{item.price}</p>
                        </>
                    )
                })}
            </div>


        </div>
    )
}
