import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const dummy_data_url = '/public/data/cars.json'

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    console.log('init getProducts')
    const response = await fetch(dummy_data_url)
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',

  });


  const state = {
    products,
    formatter
  }

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  );

}

export default ProductProvider;
