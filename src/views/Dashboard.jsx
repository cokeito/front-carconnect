import { useContext } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Categories } from '../components/Categories'
import { Items } from '../components/Items'
import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout'
import { Cat } from '../components/Cat'

export const Dashboard = () => {

  const { products } = useContext(ProductContext)

  return (
    <>
      <Layout>
        <Hero />

        <section>

          <div className="container mx-auto mt-10 px-10">
            <Cat />
          </div >
        </section>

        <section className="my-10">
          <div className="container mx-auto px-10">
            <Items title="Marketplace" products={products} />
          </div>
        </section>

      </Layout>



    </>
  )
}
