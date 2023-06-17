import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./App.css";
import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="App">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat={"yyyy/MM/dd"}
        // minDate={new Date()}
        // maxDate={new Date("2023-06-30")}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default App;
