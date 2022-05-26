import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, set, data}) {
  let buttonClassName = isActive ? "chip active" : "chip";
  function select(e) {
    if ([...e.target.classList].includes("close")) {return;}
    else set(data);
  }
  return (
    <button className={buttonClassName} onClick={select} >
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={() => set(undefined)}>{`X`}</span>
    </button>
  )
}

export default Chip
