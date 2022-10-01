import AboutSection from "../components/aboutSection"
import AboutSection2 from "../components/aboutSection2"
import Cta from "../components/cta"
import Hero from "../components/hero"
import Layout from "../layout"

const Home = () => {
  return (
    <Layout plain={false}>
      <article>
        <Hero/>
        <AboutSection/>
        <AboutSection2/>
        <Cta/>
      </article>
    </Layout>
  )
}

export default Home