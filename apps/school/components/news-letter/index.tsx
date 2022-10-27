import s from "./index.module.css";
import cn from "classnames"
import { IconArrowRight, IconMail } from "@tabler/icons";

const NewsLetter = () => {
  return (
    <section className={cn("section", s.newsletter)} aria-label="newsletter"
    style={{ backgroundImage: "url('./assets/images/newsletter-bg.jpg')" }}>
    <div className="container">

      <p className="font-bold text-indigo-500 text-xl">
        Subscribe Newsletter
      </p>

      <h2 className="font-bold text-indigo-900 text-4xl pb-10">
        Get Every Latest News
      </h2>

      <form action="" className={s.newsletter_form}>

        <div className="relative bg-white rounded-2xl ">
          <input 
          type="email" name="email_address" aria-label="email" 
          placeholder="Enter your mail address" 
          required
          className="bg-white text-inherit h-20 rounded-md pl-12 md:pl-16 w-full pr-8 md:pr-40 focus:outline-none"
          />
          <IconMail className={s.mail_icon}/>
        </div>

        <button type="submit" className={cn("btn btn-primary", s.btn)}>
          <span className="span">Subscribe</span>
          <IconArrowRight className="ml-2 inline"/>
        </button>

      </form>
    </div>
  </section>
  )
}

export default NewsLetter