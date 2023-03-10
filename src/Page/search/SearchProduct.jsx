import React, { useState } from "react";
import Card from "../../Components/card";


import allProductos from "../../data/allProductos";

import "../search/SearchProduct.css";

const SearchProduct = (handleClick) => {
  const [filteredList, setFilteredList] = useState(allProductos);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchList = allProductos.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(searchList);
  };

  const onFilterChange = (event) => {
    const selectedSize = Number(event.target.value);

    const filterList = allProductos.filter((item) => {
      return Number(item.price) > selectedSize;
    });

    setFilteredList(filterList);
  };

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

        {filteredList.map((item, index) => {
          return (
      



              
                <Card key={item.id} item={item} handleClick={handleClick} />
              

          

            // <div className="card" key={index}>
            //   <picture className="box__img-card">
            //     <img src={item.image} alt="" />
            //   </picture>
            //   <h4>{item.name}</h4>
            //   <p>{item.mainCategory}</p>
            //   <p>{item.secondaryCategory}</p>
            //   <p>{item.price}</p>

            //   <button className=' button button-add-car' onClick={() =>handleClick(item)}>Agregar al Carrito</button>
            //   <button className=' button button-add-view'>Ver mas</button>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchProduct;
