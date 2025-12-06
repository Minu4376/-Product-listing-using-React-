import React, { useState, useEffect } from 'react'
import { productdata } from '../data/productData'
import Product from './product'


export const filterdData = (value, selectedCattegories) => {
  return productdata.filter(
    (p) => {
      const matchesSearch =
        !value || p.title.toLowerCase().includes(value.toLowerCase());

      const matchesCategory =
        !selectedCattegories || p.category.toLowerCase() === selectedCattegories.toLowerCase();

      return matchesSearch && matchesCategory
    }
  );
};



const Products = ({ filteredProducts, searchValue, selectedCategory }) => {
  const [products, setProducts] = useState(productdata);
  const [filterdataMessage, setFilterdataMessage] = useState(false);

  useEffect(() => {
    const filtersApplied =
      (searchValue && searchValue.trim() !== "") ||
      (selectedCategory && selectedCategory.trim() !== "");

    if (filtersApplied && filteredProducts.length === 0) {
      setFilterdataMessage(true);
      setProducts([]);
    } else {
      setFilterdataMessage(false);
      setProducts(filteredProducts.length > 0 ? filteredProducts : productdata);
    }
  }, [filteredProducts, searchValue, selectedCategory]);


  return (
    <div className='px-10 py-8'>

      <h1 className='text-4xl font-extrabold text-center bg-linear-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text mb-8'>
        Our Products
      </h1>
      {filterdataMessage && (
        <p className="text-red-500 font-semibold text-2xl text-center mb-1.5">
          No products match your filters...
        </p>
      )}
      {/* Grid */}
      <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          products.map(
            (p) => (
              <Product key={p.id}
                title={p.title}
                price={p.price}
                image={p.image}
                rating={p.rating.rate}
                category={p.category}
              />
            )
          )
        }
      </div>
    </div>
  )
}

export default Products