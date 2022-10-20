import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { UsersIcon } from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const handleSelect = (ranges: any) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <>
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={["#FD5B61"]}
        onChange={handleSelect}
      />

      <div className="flex">
        <h3 className="text 3xl font-semibold flex-grow">Number of Guests</h3>
        <UsersIcon className="h-7"></UsersIcon>
        <input
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
          className="outline-none w-12 ml-3"
          type="number"
        />
      </div>
    </>
  );
}

export default Calendar;
