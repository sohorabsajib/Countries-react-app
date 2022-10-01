import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props);
    const {numericCode,area,flag,region,name,population}= props.country;
    return (
        <div className='country'>
            <h2>Country: {name}</h2>
            <img src={flag} alt="" srcset="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small> </p>
            <p><small>Area: {area}</small> </p>
            <p><small>No: {numericCode}</small> </p>
            
        </div>
    );
};

export default Country;