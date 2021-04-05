import React, {useState} from "react";
import Menu from "./Menu";
import {Button, Modal, Badge} from "react-bootstrap";

export default function Meal(prop) {
    const [calorie, setCalorie] = useState(0);
    const [items, setItems] = useState([]);
    const [menuPop, setMenuPop] = useState(false);

    const itemPills = [];
    items.forEach((el) => {
        itemPills.push(<div><Badge pill className="bg-black font-weight-normal" variant="dark">{el}</Badge></div>)
    });

    return (
        <td>
            <Modal size="md" show={menuPop} onHide={() => setMenuPop(false)}>
                    <Menu calorie={calorie} setCalorie={setCalorie} items={items} setItems={setItems} weekIndex={prop.weekIndex} meal={prop.meal}/>
            </Modal>
            <div><Badge className="bg-yellow mb-2">Calorie: {calorie}</Badge></div>
            {itemPills}
            <Button className="btn-black mt-2" size="sm" onClick={() => setMenuPop(true)}>Add/Edit Items</Button>
        </td>
    );
}
