import React, { useState, useEffect } from "react";
import Card from "../../Components/card";
import { Navigate } from "react-router-dom";

import allProductos from "../../data/allProductos";

import "../search/SearchProduct.css";
import accesorios from "../../data/accesorios";

const SearchProduct = (handleClick) => {
  const [articulos, setArticulos] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/products?page=1&per_page=50', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3OTE3MzA5MywianRpIjoiODZiZTQ1ODktNWM4Ny00MzcwLThmZjItMjgwOGFiOTRlYTRiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjc5MTczMDkzLCJleHAiOjE2NzkxOTEwOTN9.HSae7TMBZwk5pIjxbgYn1S-I7eMLe9DJQZTRKqFHFyE'
      }
    })
    .then((response)=> response.json())
    .then((json)=> setArticulos(json.results))
  }, [])
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchList = articulos.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setArticulos(searchList);
  };

  const onFilterChange = (event) => {
    const selectedSize = Number(event.target.value);

    const filterList = articulos.filter((item) => {
      return Number(item.price) > selectedSize;
    });

    setArticulos(filterList);
  };

  if (!localStorage.getItem("token")) {
    <Navigate to="/login" />
  }

  return (
    <div className="buscar">
      <h2>Buscar</h2>
      <div className="filter-container">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div>
          <select name="size" onChange={onFilterChange}>
            <option value="">Filter by Size</option>
            <option value="25">S/ 25</option>
            <option value="80">S/ 80</option>
            <option value="140">S/ 140</option>
            <option value="230">S/ 230</option>
            <option value="1000">S/ 1000</option>
          </select>
        </div>
      </div>
      <div className="list-wrapper">

        {articulos.map((item, index) => {
          return (

            <Card key={item.id} item={item} handleClick={handleClick} />
          );
        })}
      </div>
    </div>
  );
};

export default SearchProduct;
