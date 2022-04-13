import React, { useEffect } from "react"
import "../styles/sass/materialize.scss"
import "../styles/sass/main.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import M from "materialize-css/dist/js/materialize.min.js"
import HomeButton from "../images/menuItems/home"
import AboutButton from "../images/menuItems/aboutButton"

const ListLink = (props) => (
 <li>
  <Link to={props.to}>{props.children}</Link>
 </li>
)

const Layout = ({ children, footerHide }) => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })

 let pageClass = footerHide ? "hide" : "page-footer"
 return (
  <body className="grey darken-4 main">
   <Helmet>
    <meta charSet="utf-8" />
    <link
     rel="stylesheet"
     href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
     integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
     crossorigin="anonymous"
    />
    <link
     href="https://fonts.googleapis.com/icon?family=Material+Icons"
     rel="stylesheet"
    ></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <title>Full Fat Grappling</title>
   </Helmet>
   <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="text" name="subject" />
    <textarea name="message"></textarea>
   </form>

   <div className="sidenavContainer">
    <ul id="slide-out" className="sidenav red lighten-4">
     <ListLink to="/">
      <HomeButton />
      Home
     </ListLink>
     <ListLink to="/about">
      <AboutButton />
      About
     </ListLink>
     <ListLink to="/contact">
      <i className="fas fa-envelope"></i> Contact
     </ListLink>
     <ListLink to="/membership">
      <i className="fas fa-key"></i> Membership
     </ListLink>
     <ListLink to="/athletes">
      <i className="fas fa-id-badge"></i>Athletes
     </ListLink>
     <ListLink to="/merch">
      <i className="fas fa-socks"></i>Merch
     </ListLink>
     <ListLink to="/affiliates">
      <i className="fab fa-hubspot"></i>Affiliates
     </ListLink>
     <ListLink to="/timetable">
      <i className="fas fa-calendar-alt"></i>Timetable
     </ListLink>
    </ul>
    <a href="!#" data-target="slide-out" className="sidenav-trigger">
     <i className="material-icons small">menu</i>
    </a>
   </div>

   {children}
   <div className="divider"></div>
   <div className="divider"></div>

   <footer className={pageClass}>
    <div className="container">
     <div className="row center-align">
      <div className="col s4">
       <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.instagram.com/ffgrappling/"}
       >
        <i className="fab fa-instagram linkSocial yellow-text text-darken-3" />
       </a>
      </div>
      <div className="col s4">
       <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://m.facebook.com/FULLFATGRAPPLING/?refid=17"}
       >
        <i className="fab fa-facebook linkSocial yellow-text text-darken-3" />
       </a>
      </div>
      <div className="col s4">
       {" "}
       <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.youtube.com/channel/UCRJJTwwSe01lx7-yKlUePhg/"}
       >
        <i className="fab fa-youtube linkSocial yellow-text text-darken-3" />
       </a>
      </div>
     </div>
    </div>
    <div className="footer-copyright">
     <div className="row footer-row">
      <h5 className="col s12 center-align">
       Full Fat Grappling, Pratten's Charlton La, Radstock BA3 4BD, United
       Kingdom | 07877 816 749 | info@fullfatgrappling.co.uk
      </h5>
     </div>

     <div className="nikogham hide-on-small-only ">
      <a
       className=" nikogham--link "
       href="https://nikogham.dev"
       target="_blank"
       rel="noreferrer"
      >
       <StaticImage
        src="../images/nikogham.svg"
        alt="Main Logo"
        placeholder="tracedSVG"
        layout="fixed"
        width={50}
       />
      </a>
     </div>
    </div>
   </footer>
  </body>
 )
}

export default Layout
