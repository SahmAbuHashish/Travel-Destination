import React from 'react'
import "./tours.css"

const data = require("../../data/db.json")

export default function Tours() {
    return (
        <div>
            {data.map(item => {
                return (<div className='turesDiv' key={item.id}>
                    <h3>{item.name}</h3>
                    <img src={item.image} alt={item.name}></img>
                </div>)
            })}

        </div>
    )
}
