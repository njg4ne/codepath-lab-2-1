import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  if (!props.item) { return null;}
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        {nutritionFacts.map(({id, label, attribute}, idx) => {
          return NutritionalLabelFact({key: id, label, attr: attribute, item:props.item});
        })}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact" key={props.key}>
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attr]}</span>
    </li>
  )
}

export default NutritionalLabel
