import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const AthleteCard = ({ image, hide, name, achData, statData }) => {
 //  console.log(stats)

 const dataQuery = useStaticQuery(graphql`
  {
   allImageSharp {
    nodes {
     id
     parent {
      ... on File {
       name
       relativeDirectory
       childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
       }
      }
     }
    }
   }
  }
 `)

 const athData = dataQuery.allImageSharp.nodes.filter(
  (el) => el.parent.relativeDirectory === "athletes"
 )
 console.log(athData)

 const athleteIndividualData = athData.filter(
  (foo) => foo.parent.name === `${image}`
 )

 console.log(athleteIndividualData)

 let imageSrc = athleteIndividualData[0].parent.childImageSharp

 return (
  <div className={hide ? "hide" : "card yellow lighten-5"}>
      
   <GatsbyImage image={getImage(imageSrc)} alt={`${image}`} className="athCardImg"/>
  <div className="card-image">
  <span class="btn-floating halfway-fab activator pulse yellow darken-3">
    <i class="material-icons">format_list_bulleted</i>
   </span>
  </div>
  <div className="card-content">
  <span className="card-title yellow-text text-darken-4 athleteTitle">
    {name}
   </span>
  </div>
  
   <div className="card-reveal activator black left-align yellow-text text-lighten-4">
    <span className="card-title  yellow-text text-lighten-4">
     <i className="material-icons right">close</i>
    </span>
    <h5>Stats</h5>
    <div style={{ width: "25%" }} className="divider"></div>
    <ul>
     {statData.map((stat) => (
      <div className="row left-align">
       <li style={{ display: "inline" }} key={stat.id}>
        <i className="fas fa-angle-double-right"></i> {stat.stat}
       </li>
      </div>
     ))}
    </ul>
    <h5>Achievements</h5>
    <div style={{ width: "60%" }} className="divider"></div>

    <ul>
     <ul>
      {achData.map((ach) => (
       <div className="row left-align">
        <li style={{ display: "inline" }} key={ach.id}>
         <i className="fas fa-angle-double-right"></i> {ach.ach}
        </li>
       </div>
      ))}
     </ul>
    </ul>
   </div>
  </div>
 )
}

export default AthleteCard
