'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const SelectAdd = ({ name, initial, icon, list = [] }) => {
  const [value, setValue] = useState(initial);
  const [title, setTitle] = useState(initial);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (open && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="rounded border flex items-center gap-4 w-[48%] p-3 relative">
      <FontAwesomeIcon icon={icon} />
      <div className="overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer" onClick={() => setOpen(!open)}>
        {title}
      </div>
      <input className="hidden" type="text" name={name} value={value} readOnly />
      {open && (
        <div ref={dropdownRef} className="absolute top-full left-0 w-full bg-slate-900 z-1 rounded shadow-md mt-1">
          <ul>
            {list.map((nav) => (
              <li
                onClick={() => {
                  setValue(nav.navigation);
                  setTitle(nav.presentation.title);
                  setOpen(false); // Close the list on selection
                }}
                className="text-lg p-2 cursor-pointer hover:bg-slate-800"
                key={nav.presentation.title}
              >
                {nav.presentation.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectAdd;
