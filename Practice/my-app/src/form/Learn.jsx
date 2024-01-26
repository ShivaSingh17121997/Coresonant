
import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Learn() {
    const [product, setProduct] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [edit, setEdit] = useState({ id: null, category: "", price: 0 })

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((data) => {
                console.log(data.data)
                setProduct(data.data)
                setSortedData(data.data)
            })
    }, [])

    const handleAsc = () => {
        const sort = [...sortedData].sort((a, b) => a.price - b.price)
        setProduct(sort)
    }

    const handleDesc = () => {
        const sort = [...sortedData].sort((a, b) => b.price - a.price)
        setProduct(sort)

    }

    const handleSearch = (e) => {

        const searchTerm = e.target.value.toLowerCase()

        const search = sortedData.filter((item) => {
            return item.category.toLowerCase().includes(searchTerm)
        })

        setProduct(search)

    }

    const handleEdit = (id) => {

        const editItem = sortedData.find((item) => item.id === id)

        setEdit({ id: editItem.id, category: editItem.category, price: editItem.price })


    }

    const handleSave = () => {
        const updatedData = sortedData.map((item) => item.id === edit.id ? edit : item)
        setProduct(updatedData)
        alert("Product updated")
        setEdit({ id: null, category: "", price: 0 })
    }


    return (
        <div>

            <div>
                <input onChange={handleSearch} type="text" placeholder='Search...' />
            </div>

            <div  >
                <button onClick={handleAsc} >Asc</button>
                <button onClick={handleDesc} >Desc</button>
            </div>

            <div >
                {product.map((item) => {
                    return (< div style={{ border: "1px solid black", padding: "20px", margin: "20px" }} key={item.id}>
                        <img width="100px" height="100px" src={item.image} alt={item.category} />
                        <h1>{item.category}</h1>
                        <p>{item.price}</p>
                        <button onClick={() => handleEdit(item.id)} >Edit</button>

                        {edit.id === item.id &&
                            <>
                                <input onChange={(e) => setEdit({ ...edit, category: e.target.value })} value={edit.category} type="text" placeholder='Category...' />

                                <input onChange={(e) => setEdit({ ...edit, price: e.target.value })} value={edit.price} type="number" placeholder='Price...' />

                                <button onClick={handleSave} >Save</button>

                            </>

                        }

                    </div>)

                })}
            </div>

        </div>
    )
}

