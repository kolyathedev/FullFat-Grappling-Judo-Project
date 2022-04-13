import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"
import Fade from "react-reveal/Fade"

const Contact = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })
 return (
  <Layout>
   <main className="container center-align contact-section">
    <div className="row">
     <h1>Contact</h1>
    </div>
    <div className="row section">
     <form className="col s12" name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />

      <div className="row section">
       <div className="input-field col s6">
        <input
         id="first_name"
         type="text"
         className="validate"
         name="name"
         required
        />
        <label htmlFor="first_name">First Name</label>
       </div>
       <div className="input-field col s6">
        <input id="last_name" type="text" className="validate" />
        <label htmlFor="last_name">Last Name</label>
       </div>
      </div>

      <div className="row section">
       <div className="input-field col s12">
        <input id="message" type="text" className="validate" name="message" />
        <label htmlFor="message">Message</label>
       </div>
      </div>
      <div className="row section">
       <div className="input-field col s12">
        <input id="email" type="email" className="validate" name="email" />
        <label htmlFor="email">Email</label>
       </div>
      </div>
      <div className="row section center-align">
       <div className="col s12 m4 offset-m4">
        <button
         className="btn-large waves-effect waves-light yellow darken-3"
         type="submit"
         name="action"
        >
       Send  <i class="fas fa-paper-plane"> </i> 
        </button>
       </div>
      </div>
     </form>
    </div>
    <div className="row section center-align">
     <div className="col s12">
      <Fade left slow>
       <iframe
        src="https://maps.google.com/maps?q=full%20fat%20grappling,%20Radstock%20BA3%204BD&t=&z=13&ie=UTF8&iwloc=B&output=embed"
        frameBorder="100"
        scrolling="yes"
        marginHeight="0"
        marginWidth="0"
        title="Location"
       />
      </Fade>
     </div>
    </div>
   </main>
  </Layout>
 )
}

export default Contact
