'use client'
const Accordion = ({ children }) => {
  return (
    <div >
      <ul className="flex flex-col">
        {children}
      </ul>
    </div>
  )
}

export default Accordion
