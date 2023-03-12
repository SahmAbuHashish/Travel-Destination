// import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Tour(props) {

    const idOfTheCard = ()=>{
        
    }

    return (
        <div>            
            {props.Tour.map(item => {
                return (
                    <Link to="/city/:id" onClick={idOfTheCard}> 
                    <Card style={{ width: '18rem' }} key={item.id} >
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    </Link>
                )
            })} 
        </div>
    )
}
