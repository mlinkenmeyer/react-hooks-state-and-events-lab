import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = false ? "App dark" : "App light";

  const modeClickHandler = () => {
    console.log("it was clicked");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeClickHandler}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} x />
    </div>
  );
}

export default App;
