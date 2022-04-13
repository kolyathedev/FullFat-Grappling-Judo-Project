import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"

import MerchCard from "../components/merchCard"

const Merch = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })

 return (
  <Layout>
   <main className="container center-align">
    <div className="row">
     <h1>Merchandise</h1>
    </div>
    <div className="row section">
     <MerchCard
      imageSrc="BlackHood"
      title="Black Hoodie"
      sizeChart=" £35 | S | M | L"
     />

     <MerchCard
      imageSrc="PinkHoodie"
      title="Pink Hoodie"
      sizeChart=" £30 | S | M | L"
     />
     <MerchCard
      imageSrc="GreyHood"
      title="Grey Hoodie"
      sizeChart=" £35 | S | M | L"
     />
    </div>
    <div className="row section">
     <MerchCard
      imageSrc="WhiteTee1"
      title="White Tee"
      sizeChart=" £30 | S | M | L"
     />
     <MerchCard
      imageSrc="BlackTee"
      title="Black Tee"
      sizeChart=" £30 | S | M | L"
     />{" "}
     <MerchCard
      imageSrc="GreyTeeFront"
      title="Grey Tee"
      sizeChart=" £30 | S | M | L"
     />
    </div>
    <div className="row section">
     <MerchCard
      imageSrc="FrontSackBag"
      title="Camo Holdall"
      sizeChart=" £60 | L"
     />
     <MerchCard
      imageSrc="SackFront"
      title="Camo Holdall"
      sizeChart=" £60 | L"
     />
     <MerchCard
      imageSrc="RuckSack"
      title="Camo RuckSack"
      sizeChart=" £25 | S | M | L"
     />
    </div>
    <div className="row section">
     <MerchCard
      imageSrc="KidsTeeBlack"
      title="Kids Tee"
      sizeChart=" £15 | S | M | L"
     />
     <MerchCard
      imageSrc="FrontHat1"
      title="Sports Cap"
      sizeChart=" £18 | S | M | L"
     />
     <MerchCard
      imageSrc="ShortsSide"
      title="Shorts"
      sizeChart=" £25 | S | M | L"
     />
    </div>
    <div className="row section">
     <MerchCard
      imageSrc="SackBlue"
      title="Blue Rucksack "
      sizeChart=" £25 | S | M | L"
     />
     <MerchCard
      imageSrc="SackBlack"
      title="Black Rucksack"
      sizeChart=" £25 | S | M | L"
     />
     <MerchCard
      imageSrc="SackPink"
      title="Pink Rucksack"
      sizeChart=" £25 | S | M | L"
     />
    </div>
   </main>
  </Layout>
 )
}

export default Merch
