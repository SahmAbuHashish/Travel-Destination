import { useState } from 'react';
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { useParams } from 'react-router-dom';



const data = require("../../data/db.json")


export default function TourDetails(props) {
    
    const [showMore, setShowMore] = useState(false);

    const { id } = useParams();
    console.log(id);

    return (
        <div> 
            <h1>TourDetails</h1>
            <Navbar />
            <div className='details'>
                {data.map (item => {
                    return (
                        <div className='turesDiv' key={item.id}>
                            <h3>{item.name}</h3>
                            <h3>{item.id}</h3>
                            <h3>{item.price}</h3>
                            <p>
                                {showMore ? item.info : `${item.info.substring(0, 250)}`}
                                <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                            </p>
                            <img src={item.image} alt={item.name}></img>
                        </div>
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}
