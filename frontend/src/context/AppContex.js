
import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
const AppContext =createContext()
const AppProvider=({children})=>
    {
        const [inc,setinc]=useState(0)
        const [user,setuser]=useState([])
        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get("http://localhost:2000/api/v1/getinfo");
                    setuser(response.data.user);
                } catch (err) {
                    console.log(err);
                    console.log("Error while fetching info");
                }
            };
    
            fetchUserData();
        }, []);
        const [userdata,setuserdata] = useState(
            {
                name:'',
                phone:'',
                role:'',
                password:'',
                email:''
            }
        ) 
        const val={
           inc,setinc,user,setuser,user,userdata,setuserdata
        }
        
        return (
            <AppContext.Provider value={val}>
                {children}
            </AppContext.Provider>
        )
    }
    export {AppContext,AppProvider}