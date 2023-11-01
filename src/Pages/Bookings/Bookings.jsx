import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([]);
    const axiosSecure =useAxiosSecure()
    // const url =`https://car-doctors-server-omega.vercel.app/bookings?email=${user?.email}`;
    const url =`/bookings?email=${user?.email}`;
    useEffect(()=>{
      
        // fetch(url,{credentials:'include'})
        // .then(res=>res.json())
        // .then(data=>setBookings(data))

        // axios(url,{withCredentials:true})
        // .then(res=>{
        //   setBookings(res.data)
        // })
        axiosSecure.get(url)
        .then(res=>setBookings(res.data))
    },[])
    const handleDelete =id =>{
        const proceed =confirm('Are you want to delete')
        if(proceed){
            fetch(`https://car-doctors-server-omega.vercel.app/bookings/${id}`,{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify()
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('delete Done')
                }
                const remaining =bookings.filter(booking=>booking._id !==id)
          setBookings(remaining)
            })
        }
    }
    const handleBookingConfirm = id =>{
        fetch(`https://car-doctors-server-omega.vercel.app/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
             //update status 
             const remaining =bookings.filter(booking=>booking._id!==id);
             const updated =bookings.find(booking=>booking._id==id)
             updated.status='confirm'
             const newBooking =[updated,...remaining]
             setBookings(newBooking)
            }
        })
    }
    return (
        <div>
            <h2>My Booking :{bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=><BookingRow handleBookingConfirm={handleBookingConfirm} handleDelete={handleDelete} booking={booking} key={booking._id}></BookingRow>)
      }
      
      
      
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;