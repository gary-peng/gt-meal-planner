import React from "react";
import Day from "./Day"
import {Table} from "react-bootstrap";

export default function Calendar() {
    const week = [];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    days.forEach((el, i) => {
        week.push(<Day day={el} weekIndex={i}/>);
    });
    return (
        <Table bordered hover className="bg-light mt-3 yellow-border">
            <thead>
                <tr>
                <th></th>
                <th>Breakfast</th>
                <th>Lunch</th>
                <th>Dinner</th>
                </tr>
            </thead>
            <tbody>
                {week}
            </tbody>
        </Table>
    );
}
