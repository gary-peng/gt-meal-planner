import React, { useState } from "react";
import Restrictions from "./components/Restrictions";
import DinningHalls from "./components/DinningHalls";
import Calendar from "./components/Calendar"
import { RestrictContext, DinnHallContext } from "./context/GlobalContext";

import "./App.css";

function App() {
    const [restrict, setRestrict] = useState([]);
    const [dinnHall, setDinnHall] = useState("nav");

    return (
        <div className="container">
            <h1 className="mt-5">Gerogia Tech Meal Planner</h1>
            <RestrictContext.Provider value={{restrict, setRestrict}}>
                <DinnHallContext.Provider value={{dinnHall, setDinnHall}}>
                    <DinningHalls />
                    <Restrictions />
                    <Calendar />
                </DinnHallContext.Provider>
            </RestrictContext.Provider>
        </div>
    );
}

export default App;

