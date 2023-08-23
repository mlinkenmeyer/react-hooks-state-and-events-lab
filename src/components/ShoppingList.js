import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterCategory, setFilterCategory] = useState("");

  const filteredItems = items.filter((item) => {
    if (filterCategory === "All") {
      return true;
    }
    return item.category.toLowerCase().includes(filterCategory.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          onChange={(e) => {
            setFilterCategory(e.target.value);
          }}
          value={filterCategory}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
