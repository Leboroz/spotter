const Segment = ({ title, children }) => {
  return (
    <div className="px-4">
      <h2 className="my-7 text-xl font-semibold">{title}</h2>
      {children}
    </div>
  )
}

export default Segment
