import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const CheckOut = () => {
    const services=useLoaderData()
    const {title,_id,price,img}=services
    const {user}=useContext(AuthContext)
    const handleBookService =e=>{
      e.preventDefault()
      const form =e.target 
      const name=form.name.value;
      const date=form.date.value;
      const email=user?.email;
      // const date=form.date.value;
      const booking ={
        CustomerName:name,
        email,
        img,
        date,
        service:title,
        service_id:_id,
        price:price
      }
      console.log(booking)
      fetch('https://car-doctors-server-omega.vercel.app/bookings',{
        method:'POST',
        headers:{
         'content-type':'application/json'
        },
        body:JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
          alert('service booking added')
        }
      })
    }
    return (
        <div>
            <h2> Booked Page :{title}</h2>
            <form onSubmit={ handleBookService}  className="card-body">
            
           <div   className='grid gird-cols-1 md:grid-cols-2 gap-5'>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name='date'  className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due  Amount</span>
              </label>
              <input type="text" defaultValue={'$'+price}  className="input input-bordered" required />
             
            </div>
           </div>
            
            <div className="form-control mt-6">
              
              <input className="btn btn-primary" type="submit" value="Order Confirm" />
            </div>
          </form>
        </div>
    );
};

export default CheckOut;