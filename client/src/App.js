import React, { useState } from "react";
import Restrictions from "./components/Restrictions";
import DiningHalls from "./components/DiningHalls";
import Calendar from "./components/Calendar"
import {RestrictContext, DinHallContext} from "./context/GlobalContext";

import "./App.css";

function App() {
    const [restrict, setRestrict] = useState([]);
    const [dinHall, setDinHall] = useState("nav");

    return (
        <div className="container">
            <h1 className="mt-5">Gerogia Tech Meal Planner</h1>
            <RestrictContext.Provider value={{restrict, setRestrict}}>
                <DinHallContext.Provider value={{dinHall, setDinHall}}>
                    <DiningHalls />
                    <Restrictions />
                    <Calendar />
                </DinHallContext.Provider>
            </RestrictContext.Provider>
        </div>
    );
}

export default App;

