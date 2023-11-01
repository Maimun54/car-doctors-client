import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL:'https://car-doctors-server-omega.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
     const {logOut}=useAuth()
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
              },error=>{
               console.log('error tracked in the sector',error.response)
               if(error.response.status===401 || error.response.status===403){
                console.log('logout the user')
                logOut()
                .then(()=>{
                
                })
                .catch(error=>console.log(error))
               }
              })
    },[])

    return axiosSecure
};

export default useAxiosSecure;