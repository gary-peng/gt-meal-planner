import React, {useState, useContext} from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {DinHallContext} from "../context/GlobalContext"

export default function DiningHalls() {
    const {dinHall, setDinHall} = useContext(DinHallContext);

    const handleChange = (val) => setDinHall(val);

    const diningHalls = ["nav"];

    return (
        <div className="mt-4">
            <h6 className="font-weight-bold">Dining Halls (brittain is currently closed)</h6>
            <ToggleButtonGroup type="radio" name="dinningHallOptions" value={dinHall} onChange={handleChange}>
                {diningHalls.map((diningHall) => <ToggleButton className="rounded-0 shadow-none btn-white" value={diningHall}>{diningHall}</ToggleButton>)}
            </ToggleButtonGroup>
        </div>
    );
}
