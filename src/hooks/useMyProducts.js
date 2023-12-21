import { useEffect, useState } from "react"
import { CarApi } from "../api/CarApi"

export const useMyProducts = () => {
  const [myProducts, setMyProducts] = useState([])

  useEffect(() => {
    getMyProducts()
  }, [])

  async function getMyProducts() {
    try {
      const res = await CarApi.get('/items/my')
      if (res.status == 200) {
        setMyProducts(res.data)
      }
    } catch (error) {
      setMyProducts([])
    }

  }

  return [myProducts]

}
