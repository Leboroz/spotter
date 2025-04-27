'use client'
import { faChevronDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react"

const Select = ({ name, initial, icon, list = [] }) => {
  const [value, setValue] = useState(initial);
  const [open, setOpen] = useState(false);
  const menu = useRef(null)

  useEffect(() => {
    // document.addEventListener('click', (e) => {
    //   if (e.currentTarget !== menu.current) {
    //     setOpen(false);
    //   }
    // })
  }, []);

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-2 p-1 rounded-top">
        {icon && <FontAwesomeIcon icon={icon} />}
        <input type="text" style={{ width: value.length + 'ch' }} name={name} value={value} readOnly />
        <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
      </button>
      {
        open &&
        <div ref={menu} className="absolute top-full left-0 bg-[#0A0A0A]">
          <ul>
            {
              list.map((item) => {
                return <li key={item} className="p-2 flex gap-2 items-center"><FontAwesomeIcon icon={faCheck} /> {item}</li>
              })
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Select
