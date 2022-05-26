import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import CategoriesColumn from "./components/CategoryColumn/CategoryColumn"
import RestaurantsRow from "./components/RestaurantsRow/RestaurantsRow"
import MenuDisplay from "./components/MenuDisplay/MenuDisplay"
import { useState } from "react"
import Header from "./components/Header/Header"
import Chip from "./components/Chip/Chip"
import NutritionLabel from "./components/NutritionalLabel/NutritionalLabel"
import { createDataSet } from "./data/dataset"
import "./App.css"
import Instructions from "./components/Instructions/Instructions"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [activeCategory, activateCategory] = useState(undefined);
  const [activeRestaurant, activateRestaurant] = useState(undefined);
  const [activeMenuItem, activateMenuItem] = useState(undefined);

  const currentMenuItems = data.filter(item => 
    item.restaurant === activeRestaurant && 
    item.food_category === activeCategory
  );

  const currentInstructions = (() => {
    let key = undefined;
    const [c, r, i] = [activeCategory, activeRestaurant, activeMenuItem];
    if (i) { key = "allSelected"; } 
    else if (c && r) { key = "noSelectedItem"; } 
    else if (c) { key = "onlyCategory"; } 
    else if (r) { key = "onlyRestaurant"; }
    else {key = "start";}
    return appInfo.instructions[key];
  })();

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      {CategoriesColumn({categories, activateCategory, activeCategory})}

      {/* MAIN COLUMN */}
      <div className="container">
        {Header(appInfo)}

        {/* RESTAURANTS ROW */}
        {RestaurantsRow({restaurants, activateRestaurant, activeRestaurant})}
        

        {Instructions({instructions:currentInstructions})}

        {/* MENU DISPLAY */}
        {MenuDisplay({restaurants, activateMenuItem, activeMenuItem, currentMenuItems})}

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
