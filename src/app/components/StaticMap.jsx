const StaticMap = () => {
  return (
    <div className="relative">
      <figure className="rounded-lg overflow-hidden">
        <img src="/staticmap.png" alt="map" />
      </figure>
      <button className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] bg-slate-700 py-1 px-5 rounded-full text-[var(--primary)] font-semibold" type="button">Explore</button>
    </div>
  )
}

export default StaticMap
