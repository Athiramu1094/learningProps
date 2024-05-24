import React from 'react'
import Property from './property'
import './App.css'

function PropertiesList({properties}){//array as an prop so inside{}
    return (
    <div  className='property-container'>
      {properties.map(p => (
    <Property name={p.name} price={p.price} rating={p.rating} key ={p.id} />
))}
       
    </div>
)
}

export default PropertiesList
