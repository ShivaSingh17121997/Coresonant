import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Todo() {

    const [data, setData] = useState([])

    console.log(data, "data ")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/1/todos`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.data)
                setData(data)
            })
            .catch((err) => console.log(err))
    }, [])


    // add data in api

    fetch(`https://jsonplaceholder.typicode.com/users/1/todos`,{
        method:"POST",
        body:JSON.stringify({
            title:""
        })
    })


    return (
        <div>
            <div>
                <input  type="text" placeholder='Enter a todo' />
            </div>

            <div>
                {data.map((item) => (<Card {...item} /> ))}
            </div>

        </div>
    )
}
