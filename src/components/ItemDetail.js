import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ match }) => {
  useEffect(() => {
    fetchItems();
    console.log(match);
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );

    const items = await data.json();

    setItems(items);
  };

  return (
    <div>
      <h2>{items.name}</h2>
      <h3>{items.email}</h3>
      <h4>{items.username}</h4>
      <h4>{items.website}</h4>
    </div>
  );
};

export default ItemDetail;
