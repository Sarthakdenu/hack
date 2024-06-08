import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContex';
import { FilterContext } from '../context/FilterContext';

function A() {
    const { inc, setInc, user, setUser } = useContext(AppContext);
    const { filterdata, setFilterdata } = useContext(FilterContext);
    const [filterRole, setFilterRole] = useState('');

    function handonclick() {
        setInc(inc + 1);
    }
    console.log("hello world")
    console.log("sarthak vyas")
    function handleFilterChange(e) {
        setFilterRole(e.target.value);
    }

    function applyFilter() {
        setFilterdata(filterRole);
    }
    const filteredUsers = user.filter(u => u.role.includes(filterdata));

    return (
        <div>
            <h1>{inc}</h1>
            <button onClick={handonclick}>inc</button>
            <input
                type="text"
                placeholder="Filter by role"
                value={filterRole}
                onChange={handleFilterChange}
            />
            <button onClick={applyFilter}>Apply Filter</button>
            {
                filteredUsers.map((temp) =>
                    <div key={temp.email}>
                        <h1>{temp.name}</h1>
                        <h1>{temp.email}</h1>
                        <h1>{temp.phone}</h1>
                        <h1>{temp.role}</h1>
                    </div>
                )
            }
        </div>
    );
}

export default A;
