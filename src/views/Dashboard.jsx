import { useContext } from 'react'
import Hero from '../components/Hero'
import { Items } from '../components/Items'
import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout'
import { Cat } from '../components/Cat'
import { AnimatePresence, motion } from 'framer-motion'

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
            {products.length > 0
              ? (<Items title="Marketplace" products={products} />)
              : (
                <AnimatePresence>
                  <motion.div
                    role="alert"
                    className="alert alert-error"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>No se han encontrado productos para tu filtro :_( </span>
                  </motion.div>
                </AnimatePresence>
              )
            }
          </div>
        </section>

      </Layout>



    </>
  )
}
