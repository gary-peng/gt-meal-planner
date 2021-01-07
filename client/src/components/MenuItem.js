import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CalorieContext } from '../context/GlobalContext';

function MenuItem({ item }) {
    const { calorire, setCalorie } = useContext(CalorieContext);

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

    return (
        <div>
            <p>
                { item.name } ({ item.calorie } calories)
                <Button variant='danger' onClick={dec}>-</Button>
                { serv }
                <Button variant='success' onClick={inc}>+</Button>
            </p>
        </div>
    );
}

export default MenuItem;
