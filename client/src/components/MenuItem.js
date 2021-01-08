import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { CalorieContext } from '../context/GlobalContext';

function MenuItem({ item }) {
    const { calorie, setCalorie } = useContext(CalorieContext);

    const [serv, setServ] = useState(0);

    const inc = () => {
        setServ((prev) => prev + 1);
        setCalorie((prev) => prev + item.calorie);
    };

    const dec = () => {
        if (serv != 0) {
            setServ((prev) => prev - 1);
            setCalorie((prev) => prev - item.calorie);
        }
    };

    useEffect(() => {
        if (calorie == 0) {
            setServ(0);
        }
    }, [calorie]);

    return (
        <div>
            <p>
                { item.name } ({ item.calorie } calories)         
                <Button className='ml-2 mr-2 shadow-none white-btn' onClick={dec}>-</Button>
                { serv }
                <Button className='ml-2 mr-2 shadow-none white-btn' onClick={inc}>+</Button>
            </p>
        </div>
    );
}

export default MenuItem;
