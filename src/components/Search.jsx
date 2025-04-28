'use client'
import { faArrowRightArrowLeft, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faUser, faCircle, faCalendar } from "@fortawesome/free-regular-svg-icons"
import Select from "./Select"
import SelectAdd from "./SelectAdd"
import SelectCalendar from "./SelectCalendar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"
import { useEffect, useRef, useState } from "react"
import { getNearbyAirports, searchFlight } from "../utils/requests"

const Search = () => {
  const [airports, setAirports] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    getNearbyAirports(setAirports, setError, setLoading);
  }, []);
  console.log(airports)

  //TODO: Finish passing parameters to form
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const fd = new FormData(formRef.current);
    searchFlight(
      fd.get('')
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmitHandler} className="px-3 pb-7 shadow-[0_4px_6px_rgba(0,0,0,0.2)] rounded-xl relative">
      <div className="flex gap-1">
        <Select
          name='trip'
          icon={faArrowRightArrowLeft}
          initial={'maracaibo'}
          list={['Round trip', 'One way', 'Several cities']}
        />
        <Select
          name='amount of people'
          icon={faUser}
          initial={'1'}
        />
        <Select
          name='trip'
          initial={'Tourist'}
          list={['Tourist', 'Premium Tourist', 'Business', 'First']}
        />
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex justify-between flex-2">
          <SelectAdd name='city' icon={faCircle} initial='Maracaibo' />
          {airports && <SelectAdd list={airports.data.nearby} name='location' icon={faLocationDot} initial='Where do you want to go?' />}
        </div>
        <div className="rounded border relative flex items-center flex-1">
          <FontAwesomeIcon className="absolute top-[50%] -translate-y-[50%] left-5 invisible" icon={faCalendar} />
          <SelectCalendar initial='Exit' />
          <div className="w-[0.1px] h-6 bg-white">
          </div>
          <SelectCalendar initial='Lap' />
        </div>
      </div>
      <Button
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translate(-50%, 50%)'
        }}
        text={'Explore'}
        icon={faMagnifyingGlass}
        type="submit"
      />
    </form>
  )
}

export default Search
