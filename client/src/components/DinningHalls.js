import React, { useState, useContext } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { DinnHallContext } from '../context/GlobalContext'

function DinningHalls() {
    const {dinnHall, setDinnHall} = useContext(DinnHallContext);

    const handleChange = (val) => setDinnHall(val);

    const dinningHalls = ['nav', 'brittain'];

    return (
        <div className='mb-2'>
            <ToggleButtonGroup type='radio' name="dinningHallOptions" value={dinnHall} onChange={handleChange}>
                { dinningHalls.map((dinningHall) => <ToggleButton className='rounded-0 shadow-none white-btn' value={dinningHall}>{ dinningHall }</ToggleButton>) }
            </ToggleButtonGroup>
        </div>
    );
}

export default DinningHalls;
