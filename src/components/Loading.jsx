import { Layout } from "../layouts/Layout"

export const Loading = () => {
  return (
    <Layout>
      <div className="h-full flex items-center justify-center" >
        <span className="loading loading-dots loading-lg"></span>
      </div>
    </Layout>
  )
}
