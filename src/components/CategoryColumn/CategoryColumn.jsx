import Chip from "../Chip/Chip";

export default function CategoriesColumn({categories, activateCategory, activeCategory}) {
    return <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((e, i) => {
            const k = `cat-${i}`
            const active = e === "Burgers" ? true : false;
            return <Chip key={k} label={e} isActive={e === activeCategory} set={(c) => activateCategory(c)} data={e}/>;
          })}
        </div>
      </div>
}