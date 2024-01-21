import React, { useEffect, useState } from 'react'

export default function Sort() {
    const [product, setProduct] = useState([])
    const [sortedProduct, setSortedProduct] = useState([])
    const [EditingProduct, setEditingProduct] = useState({id:null, category:"", price:0})

    useEffect(() => {
        fetch((`https://fakestoreapi.com/products`))
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setSortedProduct(data)
                console.log(data)
            })

    }, [])

    const handleAsc = () => {
        const sortedData = [...sortedProduct].sort((a, b) => a.price - b.price)
        setProduct(sortedData)

    }

    const handleDesc = () => {

        const sortedData = [...sortedProduct].sort((a, b) => b.price - a.price)
        setProduct(sortedData)
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase()
        const search = sortedProduct.filter((item) => item.category.toLowerCase().includes(searchTerm))
        setProduct(search)

    }

    const handleDelete = (id) => {
        const deletedData = sortedProduct.filter((item) => item.id !== id)
        setProduct(deletedData)
        alert("Product Deleted")
    }

    const handleEdit = (id) => {

        const editItem = sortedProduct.find((item) => item.id === id);
        setEditingProduct({id, category:editItem.category, price: editItem.price})


    }

    const handleSaveEdit = () => {
        const updateData = sortedProduct.map((item) => item.id == EditingProduct.id ? EditingProduct : item);
        setProduct(updateData)
        setEditingProduct({id:null, category:'', price:0})
        alert("Product updated")
    }

    return (
        <div>
            <div>
                <input onChange={handleSearch} type="text " placeholder='Search...' />
            </div>
            <div>
                <button onClick={handleAsc} >  Asc</button>
                <button onClick={handleDesc} >  Desc</button>
            </div>
            <div  >
                {product?.map((item) => {
                    return (
                        < div style={{ border: '1px solid black', margin: '20px', padding: '20px' }} >
                            <img width="100px" height="100px" src={item.image} alt={item.category} />
                            <h3>{item.category}</h3>
                            <p>{item.price}</p>
                            <button onClick={() => handleDelete(item.id)} >  Delete</button>
                            <button onClick={() => handleEdit(item.id)} >Edit</button>
                            {
                                EditingProduct.id === item.id && (
                                    <>
                                    <input type="text " placeholder='category' value={EditingProduct.category } onChange={(e) => setEditingProduct({...EditingProduct, category:e.target.value})  } />
                                    
                                    <input type="number"  placeholder='price' value={EditingProduct.price} onChange={(e) => setEditingProduct({...EditingProduct, price: e.target.value})} />

                                    <button onClick={handleSaveEdit} >Save</button>

                                    </>
                                    
                                )
                            }
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
