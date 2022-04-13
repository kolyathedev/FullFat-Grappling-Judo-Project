import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"
import { StaticImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"

const About = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })
 return (
  <Layout>
   <main className="container aboutSection center-align">
    <div className="row section">
     <h1>Welcome to Full Fat Grappling</h1>
    </div>
    <div className="row">
     <div className=" col s12 m12">
      <ul>
       <Fade left slow>
        <li>
         <a
          style={{ color: "white" }}
          href="https://www.youtube.com/watch?v=Xf2-9eCsYjE"
         >
          {" "}
          <span className="specChars">礼儀</span>
          <h6> Courtesy </h6>
         </a>
        </li>
        <hr />
       </Fade>
       <Fade left slow>
        <li>
         <span className="specChars">勇気</span>
         <h6> Courage </h6>
        </li>
        <hr />
       </Fade>
       <Fade left slow>
        <li>
         <span className="specChars">正直</span>
         <h6> Honesty </h6>
        </li>
        <hr />
       </Fade>

       <Fade left slow>
        <li>
         <span className="specChars">名誉</span>
         <h6> Honour </h6>
        </li>
        <hr />
       </Fade>

       <Fade left slow>
        <li>
         <span className="specChars">謙虚</span>
         <h6> Modesty </h6>
        </li>
        <hr />
       </Fade>

       <Fade slow left>
        <li>
         <span className="specChars">尊敬 </span>
         <h6> Respect </h6>
        </li>
        <hr />
       </Fade>
       <Fade slow left>
        <li>
         <span className="specChars">自制心</span>
         <h6> Self-Control </h6>
        </li>
        <hr />
       </Fade>
       <Fade slow left>
        <li>
         <span className="specChars">友情</span>
         <h6> Friendship </h6>
        </li>

       </Fade>
      </ul>
     </div>

     <div className="col s12 m12 center-align">

     
      <h3>The home of great ambition and high expectation</h3>
     </div>
    </div>
    <div className="row section">
     <Fade fraction={0.5} left>
      <div className="col s12 m6">
       <StaticImage
        src="../images/creed/aboutImg3.jpg"
        alt="Standard"
        placeholder="dominantColor"
       />
      </div>
     </Fade>
     <Fade fraction={0.5} right>
      <div className="col s12 m6">
       <blockquote className="flow-text left-align">
        To be 'Full Fat', is to practice entirely. This is achieved by avoiding
        the neglect of technique, physical attributions and mental preparation.
        In Japan, the heart of the sport, the expectation of young judoka is to
        be fully aware of all techniques and how to perform them correctly in
        line with their performance style by the age of 16-18 years old.
       </blockquote>
      </div>
     </Fade>
    </div>

    <div className="row section">
     <Fade fraction={0.5} left>
      <div className="col s12 m6">
       <StaticImage
        src="../images/creed/aboutImg2.jpeg"
        alt="Standard"
        placeholder="blurred"
       />
      </div>
     </Fade>
     <Fade fraction={0.5} right>
      <div className="col s12 m6">
       <blockquote className="flow-text left-align">
        By teaching our students the culture of judo, the importance of
        excellent technical ability and significance of repetition, we hope they
        will become unstuck at a later stage and increase the chance of our
        athlete's longevity in the sport.
       </blockquote>
      </div>
     </Fade>
    </div>

    <div className="row section">
     <Fade fraction={0.5} left>
      <div className="col s12 m6">
       <StaticImage
        src="../images/creed/aboutImg.jpg"
        alt="Standard"
        placeholder="dominantColor"
       />
      </div>
     </Fade>
     <Fade fraction={0.5} right>
      <div className="col s12 m6">
       <blockquote className="flow-text left-align">
        We stress the importance of children and adults learning to cope with
        loss and failure. To teach a judoka that by losing a fight, they stand
        to gain much more knowledge than the victor, means they don't need to
        receive a runners up medal to feel they have achieved something,
        avoiding false success.
       </blockquote>
      </div>
     </Fade>
    </div>
   </main>
  </Layout>
 )
}

export default About
