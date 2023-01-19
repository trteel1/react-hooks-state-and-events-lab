import React from "react";
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selected, setSelected] = useState("All");
  const conDition = selected === "All" ? items.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
        )) : 
      items.filter((x)=>x.category===selected).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" />
        <select name="filter" onChange={(e)=>setSelected(e.target.value)} value={selected} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        { conDition }
      </ul>
    </div>
  );
}
export default ShoppingList;
