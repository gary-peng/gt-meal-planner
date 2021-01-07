import React, { useState, useContext } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { RestrictContext } from "../context/GlobalContext";

function Restrictions() {
    const { restrict, setRestrict } = useContext(RestrictContext);

    const handleChange = (val) => setRestrict(val);

    const restrictions = ['eggs', 'fish', 'milk', 'peanuts', 'shellfish', 'soy', 'treenuts', 'wheat', 'gluten', 'halal', 'kosher', 'locallygrown', 'organic', 'vegan', 'vegetarian'];

    return (
        <div>
            <ToggleButtonGroup type='checkbox' value={restrict} onChange={handleChange}>
                { restrictions.map((restriction) => <ToggleButton value={restriction}>{ restriction }</ToggleButton>) }
            </ToggleButtonGroup>
        </div>
    );
}

export default Restrictions;
