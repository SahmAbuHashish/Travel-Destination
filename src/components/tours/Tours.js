import React from 'react'
import "./tours.css"
import Tour from './tour/Tour'

const data = require("../../data/db.json")

export default function Tours() {
    return (
        <div>
            <Tour Tour={data}/>
        </div>
    )
}
