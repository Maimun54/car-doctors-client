import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";



const Services = () => {
    const services =useServices()
    // const [services,setServices]=useState([])

    // useEffect(()=>{
    //         fetch('https://car-doctors-server-omega.vercel.app/services')
    //         .then(res=>res.json())
    //         .then(data=>setServices(data))
    // },[])
    return (
        <div>
            
            <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-500">Services</h2>
                <h2 className="text-2xl font-bold ">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />  words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-5"> 
                {services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;