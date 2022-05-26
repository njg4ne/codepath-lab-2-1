import Chip from "../Chip/Chip";

export default function RestaurantsRow({restaurants, activateRestaurant, activeRestaurant}) {
    return <div className="RestaurantsRow">
    <h2 className="title">Restaurants</h2>
    <div className="restaurants options">
    {restaurants.map((e, i) => {
      const k = `rest-${i}`
      const active = e === "In-N-Out Burger" ? true : false;
      return <Chip key={k} label={e} isActive={e === activeRestaurant} set={(r) => activateRestaurant(r)} data={e}/>;
    })}
    </div>
  </div>
}