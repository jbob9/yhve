import AboutSection from "../components/aboutSection"
import AboutSection2 from "../components/aboutSection2"
import Hero from "../components/hero"
import Layout from "../layout"

const Home = () => {
  return (
    <Layout>
      <article>
        <Hero/>
        <AboutSection/>
        <AboutSection2/>
      </article>
    </Layout>
  )
}

export default Home