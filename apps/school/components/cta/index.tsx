import s from "./index.module.css";

const Cta = () => {
  return (
    <section className={s.cta}>
    <div className="container">
      <div className={s.title_wrapper}>
        <h2 className={s.cta_title}>
          <span>Create Free Account & Get Register</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="./assets/images/cta-vector.svg" 
          alt="Vector arrow art" className={s.vector_line}/>
        </h2>
        <button className="btn btn-primary text-lg font-semibold">Contact Us</button>
      </div>
      <div className={s.cta_banner}></div>
    </div>
  </section>

  )
}

export default Cta