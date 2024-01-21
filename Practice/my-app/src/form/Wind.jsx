import React, { useEffect, useState } from 'react';

export default function Wind() {
    const [value, setValue] = useState([]);
    const data = [
        { name: "Football" },
        { name: "Baseball" },
        { name: "Basketball" },
        { name: "iPod Touch" },
        { name: "iPhone 5" },
        { name: "Nexus 7" },
    ];

    
    useEffect(() => {
        setValue(data)
    }, [])

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const search = data.filter((item) => item.name.toLowerCase().includes(searchTerm));
        setValue(search);
    };

    return (
        <div>
            <div>
                <input type="text" placeholder='Search...' onChange={handleSearch} />
            </div>
            <div>
                {value?.map((item, index) => (
                    // You should include a unique key for each element when using map.
                    <h3 key={index}>{item.name}</h3>
                ))}
            </div>
        </div>
    );
}
