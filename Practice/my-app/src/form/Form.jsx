import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message)

    }


    return (

        <div>

            <form onSubmit={handleSubmit} >
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='enter name' /> <br />

                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='enter email' /><br />

                <input onChange={(e)=> setMessage(e.target.value)} value={message} type="text" placeholder='message' /> <br></br>

                <input type="submit" />
            </form>
        </div>
    )
}
