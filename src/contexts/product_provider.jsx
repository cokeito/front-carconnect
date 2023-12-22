import { useContext, createContext, useEffect, useState } from "react";
import { CarApi } from '../api/CarApi'
import { UserContext } from "./user_provider";
import toast from "react-hot-toast";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //console.log('init product_provider');
  const { user } = useContext(UserContext)

  const [products, setProducts] = useState([])
  //const [myProducts, setMyProducts] = useState([])
  const [itemCategories, setItemCategories] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [product, setProduct] = useState()

  const [isLoadingProduct, setIsLoadingProduct] = useState(false)

  const [wishlistItems, setWishlistItems] = useState([])


  const getWishListItems = async () => {
    try {
      const res = await CarApi.get('/wishlist/user')

      if (res.status == 200) {
        setWishlistItems(res.data)
      }
    } catch (error) {
      console.log(error);
    }

  }

  const getWishlist = async () => {
    try {
      const res = await CarApi.get('/wishlist')
      if (res.status == 200) {

        setWishlist(res.data)
      }
    } catch (error) {

    }
  }

  const getProducts = async () => {
    try {

      const res = await CarApi.get('/items')
      if (res.status == 200) {
        setProducts(res.data)
      }
    } catch (error) {
      console.log(error.code);
    }
  }

  const getItemCategories = async () => {
    try {
      const res = await CarApi.get('/item_categories')
      if (res.status == 200) {
        setItemCategories(res.data)
      }
    } catch (error) {

    }
  }

  const getProduct = async (id) => {
    try {
      setIsLoadingProduct(true)
      const res = await CarApi.get(`/items/${id}`)
      if (res.status == 200) {
        setProduct(res.data)
        setIsLoadingProduct(false)
      }
    } catch (error) {

      if (error.response.status == 404) {
        toast.error(error?.response?.data.message)
      }
    }
  }

  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',

  });


  const state = {
    isLoadingProduct,
    products,
    formatter,
    itemCategories,
    wishlist,
    product,
    wishlistItems,
    getWishListItems,
    getProduct,
    getWishlist,
    getProducts,
  }


  useEffect(() => {
    if (user) {
      getProducts()
      getItemCategories()
      getWishlist()
      getWishListItems()
    }

  }, [user])

  return (
    <ProductContext.Provider value={state}>
      {children}
    </ProductContext.Provider>
  );

}

export default ProductProvider;
