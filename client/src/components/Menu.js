import React, { useState, useContext, useEffect } from 'react'
import MenuItem from './MenuItem';
import { RestrictContext } from '../context/GlobalContext'

function Menu() {
    const { restrict, setRestrict } = useContext(RestrictContext);

    const [menu, setMenu] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('/api/menu/nav')
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
        )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            { menu.map((item) => {
                var found = false;
                restrict.forEach((val) => {
                    if (item.restrictions.includes(val)) {
                        found = true;
                    }
                });

                if (!found) {
                    return (<MenuItem item={item} />);
                }
            }) }
        </div>
    );
}

export default Menu;
