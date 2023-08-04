import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log('selected date', startDate);
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date!)} />
    );
};