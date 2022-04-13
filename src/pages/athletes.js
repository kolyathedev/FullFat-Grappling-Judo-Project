import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"
import AthleteCard from "../components/athleteCard"
import data from "../data/athleteData"
import Fade from "react-reveal/Fade"

const Athlete = () => {

 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })

 const [childCarousel, setChildCarousel] = useState({
  hideC: true,
 })
 let hideChild = () => {
  setChildCarousel({ ...childCarousel, hideC: !hideC })
  setAdultCarousel({ ...adultCarousel, hideA: true })
 }
 const { hideC } = childCarousel

 const [adultCarousel, setAdultCarousel] = useState({
  hideA: true,
 })

 let hideAdult = () => {
  setAdultCarousel({ ...adultCarousel, hideA: !hideA })
  setChildCarousel({ ...childCarousel, hideC: true })
 }

 const { hideA } = adultCarousel

 return (
  <Layout>
   <main className="container center-align athleteSection">
    <div className="row">
     <h1>Athletes</h1>
    </div>
    <div className="row section">
     <div className="col s12 m4 push-m1">
      <AthleteCard
       hide={false}
       image={"mh"}
       statData={data.cardData[0].stats}
       achData={data.cardData[0].ach}
       name={data.cardData[0].name}
      />{" "}
      <a href="#athleteCarousel">
       <i class="fas fa-angle-double-down fa-3x" onClick={hideChild}></i>
      </a>
      <p>All Adult Athletes</p>
     </div>

     <div className="col s12 m4 push-m3">
      <AthleteCard
       statData={data.cardData[3].stats}
       achData={data.cardData[3].ach}
       hide={false}
       image={"oh"}
       name={data.cardData[3].name}
      />

      <a href="#athleteCarousel">
       <i class="fas fa-angle-double-down fa-3x " onClick={hideAdult}></i>
      </a>
      <p>All Child Athletes</p>
     </div>
    </div>

    {/* ATHLETE CAROUSEL SECTION  */}

    <div id="athleteCarousel" className=" row section scrollspy">
     <Fade>
      <div className={hideC ? "hide" : "carousel"}>
       <div className="carousel-item">
        <AthleteCard
         statData={data.cardData[12].stats}
         achData={data.cardData[12].ach}
         hide={false}
         image={"k"}
         name={data.cardData[12].name}
        />
       </div>
       <div className="carousel-item" href="#two!">
        <AthleteCard
         statData={data.cardData[5].stats}
         achData={data.cardData[5].ach}
         hide={false}
         image={"jd"}
         name={data.cardData[5].name}
        />
       </div>
       <div className="carousel-item" href="#five!">
        {" "}
        <AthleteCard
         statData={data.cardData[1].stats}
         achData={data.cardData[1].ach}
         hide={false}
         image={"ng"}
         name={data.cardData[1].name}
        />
       </div>

       <div className="carousel-item" href="#four!">
        {" "}
        <AthleteCard
         statData={data.cardData[7].stats}
         achData={data.cardData[7].ach}
         hide={false}
         image={"char2"}
         name={data.cardData[7].name}
        />
       </div>
       <div className="carousel-item" href="#five!">
        {" "}
        <AthleteCard
         statData={data.cardData[8].stats}
         achData={data.cardData[8].ach}
         hide={false}
         image={"char1"}
         name={data.cardData[8].name}
        />
       </div>

       <div className="carousel-item" href="#three!">
        {" "}
        <AthleteCard
         statData={data.cardData[6].stats}
         achData={data.cardData[6].ach}
         hide={false}
         image={"hazzer"}
         name={data.cardData[6].name}
        />
       </div>
      </div>
     </Fade>

     {/* KIDS CAROUSEL SECTION  */}

     <Fade>
      <div className={hideA ? "hide" : "carousel"}>
       <div className="carousel-item" href="#one!">
        <AthleteCard
         statData={data.cardData[2].stats}
         achData={data.cardData[2].ach}
         hide={false}
         image={"ch"}
         name={data.cardData[2].name}
        />
       </div>
       <div className="carousel-item" href="#two!">
        <AthleteCard
         statData={data.cardData[4].stats}
         achData={data.cardData[4].ach}
         hide={false}
         image={"wa"}
         name={data.cardData[4].name}
        />
       </div>
       <div className="carousel-item" href="#three!">
        {" "}
        <AthleteCard
         statData={data.cardData[9].stats}
         achData={data.cardData[9].ach}
         hide={false}
         image={"cGrifford"}
         name={data.cardData[9].name}
        />
       </div>
       <div className="carousel-item" href="#four!">
        {" "}
        <AthleteCard
         statData={data.cardData[10].stats}
         achData={data.cardData[10].ach}
         hide={false}
         image={"iEvans"}
         name={data.cardData[10].name}
        />
       </div>
       <div className="carousel-item" href="#five!">
        {" "}
        <AthleteCard
         statData={data.cardData[11].stats}
         achData={data.cardData[11].ach}
         hide={false}
         image={"lRussell"}
         name={data.cardData[11].name}
        />
       </div>
       <div className="carousel-item" href="#six!">
        {" "}
        <AthleteCard
         statData={data.cardData[13].stats}
         achData={data.cardData[13].ach}
         hide={false}
         image={"jLowe"}
         name={data.cardData[13].name}
        />
       </div>
      </div>
     </Fade>
    </div>
   </main>
  </Layout>
 )
}

export default Athlete
