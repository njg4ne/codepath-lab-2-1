import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick }) {
  let buttonClassName = isActive ? "chip active" : "chip";
  function clickHandler() {
    onClick(label);
  }
  return (
    <button className={buttonClassName} onClick={clickHandler} >
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
