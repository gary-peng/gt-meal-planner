import React, { useState, useContext } from "react";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {RestrictContext} from "../context/GlobalContext";

export default function Restrictions() {
    const {restrict, setRestrict} = useContext(RestrictContext);

    const handleChange = (val) => setRestrict(val);

    const restrictions = ["eggs", "fish", "milk", "peanuts", "shellfish", "soy", "treenuts", "wheat", "gluten", "halal", "kosher", "locallygrown", "organic", "vegan", "vegetarian"];

    const allergies = [];
    restrictions.forEach((el, i) => {
        if (i <= 8) {
            allergies.push(<ToggleButton className="rounded-0 shadow-none btn-white" value={el}>{el}</ToggleButton>);
        }
    });

    const diet = [];
    restrictions.forEach((el, i) => {
        if (i > 8) {
            diet.push(<ToggleButton className="rounded-0 shadow-none btn-white" value={el}>{el}</ToggleButton>);
        }
    });

    return (
        <div className="mt-3">
            <h6 className="font-weight-bold">Allergies</h6>
            <ToggleButtonGroup className="flex-wrap" type="checkbox" value={restrict} onChange={handleChange}>
                {allergies}
            </ToggleButtonGroup>
            <h6 className="mt-3 font-weight-bold">Dietary Preferance</h6>
            <ToggleButtonGroup className="flex-wrap" type="checkbox" value={restrict} onChange={handleChange}>
                {diet}
            </ToggleButtonGroup>
        </div>
    );
}
