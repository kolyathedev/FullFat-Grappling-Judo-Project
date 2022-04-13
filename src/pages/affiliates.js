import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"
import { StaticImage } from "gatsby-plugin-image"

const Affiliates = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })
 return (
  <Layout>
   <main className="container center-align">
    <div className="row">
     <h1>Affiliate Partners </h1>
    </div>
    <div className="row section">
     <div className="col s12">
      <p className=" left-align">
       We are proud to work with our affiliates. Through mutual aid, benefit and
       trust, they help our athletes walk the path to success.
      </p>
     </div>
    </div>
    <div className="row section">
     <div className="col s12">
      <p className=" left-align ">
       Our head coach Matthew Hucker holds full First Aid, Child Protection, DBS
       certification and club insurance.
      </p>
     </div>
    </div>
    <div className="row section">
     <div className="col s12">
      <p className=" left-align light">
       Full Fat Grappling holds full membership with Britsh Judo Council and the
       UKBJJA.We believe in taking the difficult route to attain higher grade
       classification, providing for better development of fundamentals and
       technique.
      </p>
     </div>
    </div>
    <div className="divider yellow darken-3"></div>
    <div className="row section center-align">
     <h3> Clubs </h3>
    </div>
    <div className="row">
     <div className="col s6 right-align">
      {" "}
      <StaticImage
       src="../images/affiliates/CEA.png"
       alt="CraigEwersAcademy"
       placeholder="blurred"
       width={200}
       height={200}
       imgStyle={{backgroundColor: "white", borderRadius: "50%"}}
      />
     </div>
     <div className="col s4 left-align">
      <ul>
       <li>Head Coach: Craig Ewers</li>
       <li>
        <i className="fas fa-home" />
        <a
         target="_blank"
         rel="noopener noreferrer"
         href="https://www.craigewersacademy.co.uk"
        >
         {"   "}
         craigewersacademy.co.uk
        </a>
       </li>
       <li>
        <i className="fab fa-instagram " />
        <a
         target="_blank"
         rel="noopener noreferrer"
         href="https://www.instagram.com/ce_mma_/"
        >
         {"  "}
         @ce_mma_
        </a>
       </li>
       <li>
        <i className="fab fa-facebook " />
        <a
         target="_blank"
         rel="noopener noreferrer"
         href="https://www.facebook.com/CraigEwersAcademy"
        >
         {" "}
         /craigewersacademy
        </a>
       </li>
      </ul>
     </div>
    </div>
    <div className="divider yellow darken-3"></div>
    <div className="row section center-align">
     <h3> Associations </h3>
    </div>
    <div className="row">
     <div className="col s12 m6 center-align">
      <StaticImage
       src="../images/affiliates/UKBJJA.png"
       alt="UKBJJ Association"
       placeholder="blurred"
      />
     </div>
     <div className="col s12 m6 center-align">
      <StaticImage
       src="../images/affiliates/BJC.png"
       alt="British Judo Council"
       placeholder="blurred"
      />
     </div>
    </div>
    <div className="divider yellow darken-3"></div>
    <div className="row section center-align">
     <h3> Certifications </h3>
    </div>
    <div className="row">
     <div className="col s12 m4 center-align">
      <StaticImage
       src="../images/affiliates/BJJCert.jpg"
       alt="UKBJJ Association"
       placeholder="blurred"
       width={500}
       height={400}
      />
     </div>
    </div>
   </main>
  </Layout>
 )
}

export default Affiliates
