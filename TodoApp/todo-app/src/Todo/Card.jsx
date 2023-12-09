import React from 'react'

export default function Card({ id, title, completed }) {

    return (
        <div key={id}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{completed ? 'Completed' : 'Incomplete'}</div>
        </div>
    )
}



