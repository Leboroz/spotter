import { useState } from "react";

const SelectCalendar = ({ initial }) => {
  const [value, setValue] = useState(initial);
  const [open, setOpen] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.currentTarget.value);
    setOpen(false); // Hide the calendar after a date is selected
  };

  return (
    <div className="py-3 ps-8 flex-1 relative">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {value}
      </div>
      {open && (
        <input
          className="absolute top-full left-0 mt-1 p-4 bg-white text-slate-900 rounded shadow outline-none border border-gray-300"
          onChange={handleInputChange}
          type="date"
          name="date"
          value={value}
        />
      )}
    </div>
  );
};

export default SelectCalendar;
