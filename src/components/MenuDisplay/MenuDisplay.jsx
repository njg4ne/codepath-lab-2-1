import Chip from "../Chip/Chip";
import NutritionalLabel from "../NutritionalLabel/NutritionalLabel";

export default function MenuDisplay({restaurants, activateMenuItem, activeMenuItem, currentMenuItems}) {
    return <div className="MenuDisplay display">
    <div className="MenuItemButtons menu-items">
      <h2 className="title">Menu Items</h2>
      {currentMenuItems.map((e, i) => {
      const k = `menu-item-${i}`
      const label = e.item_name;
      return <Chip key={k} label={label} isActive={e === activeMenuItem} set={(it) => activateMenuItem(it)} data={e}/>;
    })}
    </div>

    {/* NUTRITION FACTS */}
    <div className="NutritionFacts nutrition-facts">
      {NutritionalLabel({item: activeMenuItem})}</div>
  </div>
}