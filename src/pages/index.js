import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"

// markup
const IndexPage = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })

 
 return (
  <Layout footerHide={true}>
   <main className="home-container ">
    <div className="row center-align">
     <div className="row">
      <div className="col s12">
       <h3  id="name">
        Matthew Hucker's
       </h3>
      </div>
     </div>
     <h1 className="title">Full Fat</h1>
     <div className="row center-align yellow-text text-darken-2">
      <h1 className="title--grapple">Grappling</h1>
     </div>
    </div>
   </main>
  </Layout>
 )
}

export default IndexPage
