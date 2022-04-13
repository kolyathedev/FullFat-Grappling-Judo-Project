import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

const Membership = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })
 return (
  <Layout>
   <main className=" center-align">
    <div className="row ">
     <h1>Membership</h1>
    </div>

    <div className="row section grey-text text-darken-4 cardsRow ">
     <div className="col s12 m4 ">
      <Fade left>
       <div className="card ">
        <StaticImage
         src="../images/7.jpg"
         alt="Standard"
         placeholder="blurred"
        />

        <div className="card-image">
         <span className="card-title  yellow-text text-darken-3">
          Standard Membership
         </span>
        </div>

        <div className="card-tabs">
         <ul className="tabs tabs-fixed-width">
          <li className="tab">
           <a href="#test4"> Children </a>
          </li>
          <li className="tab">
           <a className="active" href="#test5">
            Adults
           </a>
          </li>
         </ul>
        </div>
        <div className="card-content">
         <h5 id="test4">4 Sessions per month £20</h5>
         <h5 id="test5">4 Sessions per month £30</h5>
        </div>
       </div>
      </Fade>
     </div>

     <div className="col s12 m4">
      <Fade bottom>
       <div className="card">
        <StaticImage
         src="../images/5.jpg"
         alt="Premimum Membership"
         placeholder="blurred"
        
        />

        <div className="card-image">
         <span className="card-title  yellow-text text-darken-3">
          Premium Membership
         </span>
        </div>
        <div className="card-tabs">
         <ul className="tabs tabs-fixed-width">
          <li className="tab">
           <a href="#test6"> Children </a>
          </li>
          <li className="tab">
           <a className="active" href="#test7">
            Adults
           </a>
          </li>
         </ul>
        </div>
        <div className="card-content">
         <h5 id="test6">Access all sessions £40</h5>
         <h5 id="test7">Access all sessions £60</h5>
        </div>
       </div>
      </Fade>
     </div>
     <div className="col s12 m4">
      <Fade right>
       <div className="card">
        <StaticImage
         src="../images/membership/121.jpg"
         alt="1-2-1 sessions"
         placeholder="blurred"
        />

        <div className="card-image">
         <span className="card-title yellow-text text-darken-3">
          1-2-1 Sessions
         </span>
        </div>
        <div className="card-content">
         <h5>£40 Per Hour</h5>
         <br></br>
        </div>
       </div>
      </Fade>
     </div>
    </div>
   </main>
  </Layout>
 )
}

export default Membership
