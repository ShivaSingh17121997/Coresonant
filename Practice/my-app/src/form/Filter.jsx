import React, { useEffect, useState } from 'react';

export default function Filter() {
    const [product, setProduct] = useState([]);
    const [sortedProduct, setSortedProduct] = useState([]);
    const [editingProduct, setEditingProduct] = useState({ id: null, category: '', price: 0 });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setSortedProduct(data);
                console.log(data);
            });
    }, []);

    const handleASc = () => {
        const sortedData = [...sortedProduct].sort((a, b) => a.price - b.price);
        setProduct(sortedData);
    };

    const handleDesc = () => {
        const sortedData = [...sortedProduct].sort((a, b) => b.price - a.price);
        setProduct(sortedData);
    };

    const handleSearch = (e) => {
        const search = e.target.value.toLowerCase();
        const searchTerm = sortedProduct.filter(
            (item) => item.category.toLowerCase().includes(search)
        );
        setProduct(searchTerm);
    };

    const handleDelete = (id) => {
        const deletedData = sortedProduct.filter((item) => item.id !== id);
        setProduct(deletedData);
        alert('Product deleted');
    };

    const handleEdit = (id) => {
        const editItem = sortedProduct.find((item) => item.id === id);
        setEditingProduct({ id, category: editItem.category, price: editItem.price });
    };

    const handleSaveEdit = () => {
        const updatedData = sortedProduct.map((item) =>
            item.id === editingProduct.id ? editingProduct : item
        );
        setProduct(updatedData);
        setEditingProduct({ id: null, category: '', price: 0 });
        alert('Product edited');
    };

    return (
        <div>
            <div>
                <input onChange={handleSearch} type="text" placeholder="Search..." />
            </div>
            <div>
                <button onClick={handleASc}>Sort Asc</button>
                <button onClick={handleDesc}>Sort Desc</button>
            </div>
            <div style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                {product?.map((item) => (
                    <div key={item.id}>
                        <h3>{item.category}</h3>
                        <img width="100px" height="100px" src={item.image} alt="img" />
                        <p>{item.price}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        {editingProduct.id === item.id && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    value={editingProduct.category}
                                    onChange={(e) =>
                                        setEditingProduct({ ...editingProduct, category: e.target.value })
                                    }
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    value={editingProduct.price}
                                    onChange={(e) =>
                                        setEditingProduct({ ...editingProduct, price: e.target.value })
                                    }
                                />
                                <button onClick={handleSaveEdit}>Save</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
