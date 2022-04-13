import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const MerchCard = ({ imageSrc, title, sizeChart, larger }) => {

  
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

 const merchData = dataQuery.allImageSharp.nodes.filter(
  (el) => el.parent.relativeDirectory === "merch"
 )
 console.log(merchData)

 const merchIndividualData = merchData.filter(
  (foo) => foo.parent.name === `${imageSrc}`
 )

 console.log(merchIndividualData)

 let image = merchIndividualData[0].parent.childImageSharp

 let largeCard = (larger? "col s12 m6" : "col s12 m4")

 return (
  <div className={largeCard}>
   <div className="card">
    <GatsbyImage
     image={getImage(image)}
     className="materialboxed"
     alt="clothing item"
    />

    <div className="card-image">
    
    </div>
    <div className="card-content yellow-text text-darken-4">
     <span className="card-title black-text"> {title}</span>
     <p>{sizeChart} </p>{" "}
    </div>
   </div>
  </div>
 )
}

export default MerchCard
