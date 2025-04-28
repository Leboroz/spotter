import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({ text, icon, type, style }) => {
  return (
    <button style={style} type={type} className="rounded-full bg-[var(--primary)] text-sm text-gray-800 py-2 px-5">
      {icon && <FontAwesomeIcon className="me-2" icon={icon} />}
      {text}
    </button>
  )
}

export default Button
