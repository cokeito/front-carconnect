import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Categories } from '../components/Categories'
import { Items } from '../components/Items'
import { Footer } from '../components/Footer'
import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout'

export const Dashboard = () => {

  const { products } = useContext(ProductContext)
  const n_products = products.slice(0, 15)


  return (
    <>
      <Layout>
        <Hero />
        <section>
          <div className="container mx-auto flex gap-5 mt-10 px-10">
            <Categories title="Categorias" />
          </div >
        </section>

        <section className="my-10">
          <div className="container mx-auto px-10">
            <Items title="Marketplace" products={n_products} />
          </div>
        </section>

      </Layout>



    </>
  )
}
