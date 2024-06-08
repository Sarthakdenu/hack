import React, { useContext } from 'react';
import { AppContext } from '../context/AppContex';
import axios from 'axios';
import './B.css'
function B() {
    const { inc, setInc, userdata, setuserdata } = useContext(AppContext);

    function handonclick() {
        setInc(inc + 1);
    }

    function handleonchange(e) {
        const { name, value } = e.target;
        setuserdata((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }
    
   
        const handleonclick=(e)=>
          {
            e.preventDefault()
            const response = axios.post("http://localhost:2000/api/v1/createuser",
              {name:userdata.name,
              phone:userdata.phone,
              email:userdata.email,
              password:userdata.password,
              role:userdata.role})
            .then(
            
            ).catch((err)=>
            {
              console.log(err)
            })
          }
   
    return (
        <div>
            <h1>{inc}</h1>
            <button onClick={handonclick}>inc</button>
            <input
                type="text"
                placeholder="enter the name"
                name="name"
                value={userdata.name}
                onChange={handleonchange}
            />
            <input
                type="number"
                placeholder="enter the number"
                name="phone"
                value={userdata.phone}
                onChange={handleonchange}
            />
            <input
                type="email"
                placeholder="enter the email"
                name="email"
                value={userdata.email}
                onChange={handleonchange}
            />
            <input
                type="password"
                placeholder="enter the password"
                name="password"
                value={userdata.password}
                onChange={handleonchange}
            />
            <input
                type="text"
                placeholder="enter the role"
                name="role"
                value={userdata.role}
                onChange={handleonchange}
            />
            <h1>{userdata.name} {userdata.email}</h1>
            <button onClick={(e)=>handleonclick(e)}>submit</button>
        </div>
    );
}

export default B;
