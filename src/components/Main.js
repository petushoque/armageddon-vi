import React from 'react';
import { useState } from 'react';
import './Main.css';
import Asteroid from './Asteroid';

export default function Main(props) {

    

    return (
        <div className='Main'>
        {props.asteroids && props.asteroids.map((asteroid) => (           
                <Asteroid key={asteroid.id} asteroid={asteroid}/>
        ))}
        </div>
    )
}