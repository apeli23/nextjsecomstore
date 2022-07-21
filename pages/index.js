import Layout from "../components/Layout";


export default function Home({ children }) {
  return (
    <Layout>
      <h1>products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </Layout>
  )
}
