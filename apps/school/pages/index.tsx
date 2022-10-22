import AboutSection from "../components/aboutSection"
import AboutSection2 from "../components/aboutSection2"
import Cta from "../components/cta"
import Event from "../components/event"
import Hero from "../components/hero"
import Layout from "../layout"

const Home = () => {
  return (
    <Layout plain={false}>
      <article className="overflow-hidden">
        <Hero/>
        <AboutSection/>
        <AboutSection2/>
        <Cta/>
        <Event/>
      </article>
    </Layout>
  )
}

export default Home