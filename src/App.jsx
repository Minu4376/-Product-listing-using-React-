import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { filterdData } from './components/Products'
import { productdata } from './data/productData'
const App = () => {
  const [filtered, setFiltered] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  const handleSearch = (value, selectedCattegories) => {
    const result = filterdData(value, selectedCattegories);
    setFiltered(result);
    setsearchValue(value)
    setselectedCategory(selectedCattegories)
  };

  const handleSort = (type) => {
    const products = filtered.length > 0 ? filtered : productdata;
    let sorted = [...products];

    if (type === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    }
    if (type === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    if (type === "rating") {
      sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFiltered(sorted);

  };

  return (
    <div>
      <Navbar onSearch={handleSearch} handleSort={handleSort} />
      <Products filteredProducts={filtered} searchValue={searchValue}
        selectedCategory={selectedCategory} />
    </div>
  )
}

export default App