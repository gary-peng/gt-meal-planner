import React, { useState } from 'react'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function DinningHalls() {
    const [dh, setDh] = useState('nav');

    const handleChange = (val) => setDh(val);

    const dinningHalls = ['nav', 'brittain'];

    return (
        <div>
            <ToggleButtonGroup type='radio' name="dinningHallOptions" value={dh} onChange={handleChange}>
                { dinningHalls.map((dinningHall) => <ToggleButton value={dinningHall}>{ dinningHall }</ToggleButton>) }
            </ToggleButtonGroup>
        </div>
    );
}

export default DinningHalls;
