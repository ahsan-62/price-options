import { useEffect } from 'react';
import { useState } from 'react';
import Price from '../Price/Price';


const Prices = () => {

    const [prices,setPrices]=useState([]);
    useEffect(()=>{
        fetch("pricing.json")
        .then(res=>res.json())
        .then(data=>setPrices(data))
    })
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>

            {
                prices.map(coursePrice=><Price coursePrice={coursePrice} key={coursePrice.id} ></Price>)
            }
            
        </div>
    );
};

export default Prices;