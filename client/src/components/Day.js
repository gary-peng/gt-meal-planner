import React from "react";
import Meal from "./Meal";

export default function Day(prop) {

    return (
        <tr>
            <td>
                {prop.day}
            </td>
            <Meal weekIndex={prop.weekIndex} meal="breakfast"/>
            <Meal weekIndex={prop.weekIndex} meal="lunch"/>
            <Meal weekIndex={prop.weekIndex} meal="dinner"/>
        </tr>
    );
}
