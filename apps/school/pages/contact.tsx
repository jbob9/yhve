import Layout from "../layout"
import Input from "../components/Input"

const Contact = () => {
  return (
    <Layout plain>
      <div className="pt-28 pb-10 mx-6">
        <h1 className="text-4xl font-bold pb-6">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-wrap-reverse">
          <form>
            <div className="space-y-4">
              <Input
              name="name"
              label="Name"
              />
              <Input
              name="email"
              label="Email"
              />
              <Input
              name="telephone"
              label="Telephone"
              />
              <div>
                <label htmlFor="description" className="font-bold text-gray-800 text-sm">Description</label>
                <textarea rows={6} name="description" className="form-control mt-1"/>
              </div>
            </div>
            <div className="text-right">
            <button type="submit" 
            className="p-3 font-semibold bg-teal-400 text-white rounded-lg mt-4 self-end">
              Soummetre
            </button>
            </div>
          </form>

          <div>
            <h2 className="pb-4 text-lg font-semibold leading-relaxed tracking-wider">
              Contactez-nous pour tout ce qui concerne notre entreprise ou nos services.  
              Nous ferons de notre mieux pour vous répondre dans les plus brefs délais.
            </h2>
            <div>
              <div></div>
              <div className="flex flex-col">
                Yhve-jire
                <span>3575 Fake Buena Vista Avenue</span>
                <span>+1 (650) 555-0111</span>
                <span>info@yourcompany.example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact