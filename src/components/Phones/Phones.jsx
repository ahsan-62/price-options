import axios from 'axios';
import { useEffect, useState } from 'react';

const Phones = () => {
    const [phones,setPhones]=useState([]);

    // useEffect(()=>{
    //     fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //     .then(res=>res.json())
    //     .then(data=>setPhones(data.data))
    // })


    useEffect(()=>{

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data=>{
            const allData=data.data.data;
            const fakeData=allData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })

            setPhones(fakeData);
           
        })
    },[])

    console.log(phones);

    return (
        <div>
            <h1>Phones:{phones.length}</h1> 
           
            {
                phones.map(phone=><p key={phone.name}>{phone.name}</p>)
            }   
            {
                phones.map((phone,index)=><p key={index}>{parseInt(phone.price)}</p>)
            }             
        </div>
    );
};

export default Phones;