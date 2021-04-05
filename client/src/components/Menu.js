import React, {useState, useContext, useEffect} from "react";
import {Modal, ToggleButton, ToggleButtonGroup, Badge} from "react-bootstrap";
import {RestrictContext, DinnHallContext} from "../context/GlobalContext"

export default function Menu(prop) {
    const {restrict, setRestrict} = useContext(RestrictContext);
    const {dinnHall, setDinnHall} = useContext(DinnHallContext);
    
    const [menu, setMenu] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("/api/menu/" + dinnHall + "/" + prop.meal)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setMenu(result[prop.weekIndex]);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, [dinnHall]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }

    function handleChange(val) {
        prop.setItems(val);
        
        let cal = 0;
        val.forEach((el) => {
            menu.forEach((i) => {
                if (i.name === el) {
                    cal += i.calorie;
                }
            });
        });
        prop.setCalorie(cal);
    }

    const menuItems = [];
    menu.forEach((el) => {
        var found = false;
        restrict.forEach((val) => {
            if (el.restrictions.includes(val)) {
                found = true;
            }
        });

        if (!found) {
            menuItems.push(<ToggleButton className="rounded-0 shadow-none btn-white text-left" value={el.name}>{el.name} (Calorie: {el.calorie})</ToggleButton>);
        }
    });


    return (
        <div>
             <Modal.Header closeButton>
                <Modal.Title>Menu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5><Badge className="bg-yellow mb-3">Calorie: {prop.calorie}</Badge></h5>
                <ToggleButtonGroup vertical className="flex-wrap" type="checkbox" value={prop.items} onChange={handleChange}>
                    {menuItems}
                </ToggleButtonGroup>
            </Modal.Body>
        </div>
    );
}
