import AboutSection from "../components/aboutSection"
import Hero from "../components/hero"
import Layout from "../layout"

const Home = () => {
  return (
    <Layout>
      <article>
        <Hero/>
        <AboutSection/>
      </article>
    </Layout>
  )
}

export default Home