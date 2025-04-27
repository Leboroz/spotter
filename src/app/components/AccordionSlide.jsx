'use client'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const AccordionSlide = ({ icon, title, description, subTitle, subDescription }) => {
  const [open, setOpen] = useState()
  return (
    <li onClick={() => setOpen(!open)} className="flex items-center bg-slate-700 rounded-lg p-4">
      <div className="flex items-start gap-2">
        <FontAwesomeIcon className="p-2 text-2xl" icon={icon} />
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm">{description}</p>
          {open && <div>
            <div className="h-[0.1px] w-full bg-slate-900 my-4" />
            <h3 className="text-lg font-semibold mb-1">{subTitle}</h3>
            <p className="text-sm">{subDescription}</p>
          </div>}
        </div>
      </div>
      <FontAwesomeIcon className="p-2" icon={faChevronDown} />
    </li>
  )
}

export default AccordionSlide
