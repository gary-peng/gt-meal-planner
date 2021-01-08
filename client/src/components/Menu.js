import React, { useState, useContext, useEffect } from 'react';
import MenuItem from './MenuItem';
import { RestrictContext, DinnHallContext, CalorieContext } from '../context/GlobalContext'

function Menu() {
    const { restrict, setRestrict } = useContext(RestrictContext);
    const { dinnHall, setDinnHall } = useContext(DinnHallContext);
    const { calorie, setCalorie } = useContext(CalorieContext);

    const [menu, setMenu] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('/api/menu/' + dinnHall)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setMenu(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
        setCalorie(0);
    }, [dinnHall]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-5'>
            <h5>Menu</h5>
            { menu.map((item) => {
                var found = false;
                restrict.forEach((val) => {
                    if (item.restrictions.includes(val)) {
                        found = true;
                    }
                });

                if (!found) {
                    return <MenuItem item={item} />;
                }
            }) }
        </div>
    );
}

export default Menu;
