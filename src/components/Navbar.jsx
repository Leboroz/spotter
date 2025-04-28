'use client'

import { faBars, faSun, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-1 border-b-[0.1px]">
      <span >
        <button className="p-3" type="button"><FontAwesomeIcon icon={faBars} className="text-lg"></FontAwesomeIcon></button>
        <a className="text-lg font-semibold" href="#">Spotter</a>
      </span>
      <ul className="flex gap-6 items-center text-lg">
        <li><FontAwesomeIcon icon={faSun} /></li>
        <li><FontAwesomeIcon icon={faGrip} /></li>
        <li className="w-12 h-12 ">
          <figure className="p-2">
            <img className="rounded-full" src="/profile-pic.png" alt="user" />
          </figure>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
