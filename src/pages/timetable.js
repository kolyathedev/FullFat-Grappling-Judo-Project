import React, { useEffect } from "react"
import Layout from "../components/layout"
import M from "materialize-css/dist/js/materialize.min.js"

const Timetable = () => {
 useEffect(() => {
  // init Materialize JS
  M.AutoInit()
 })
 return (
  <Layout>
   <main className="container center-align">
    <div className="row">
     <h1>Timetable</h1>
    </div>
    <div className="row section">
     <div className="col s12">
      <div>
       <p> LH = Large Hall SH = Small Hall </p>
       <table className="centered">
        <thead>
         <tr className="centered highlight responsive-table"></tr>
         <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
         </tr>
        </thead>
        <tbody>
         <tr>
          <td />
          <td>Seniors 6:00am-10:00am SH</td>
          <td />
          <td>Seniors 6:00am-10:00am SH</td>
          <td>Juniors 9-16yrs 18:00-19:00 SH</td>
          <td />
          <td>Seniors 6:00am-10:00am SH</td>
         </tr>
         <tr>
          <td />
          <td>Children 5-8yrs 17:00-17:55 LH</td>
          <td />
          <td />
          <td>Seniors 20:00-21:30 SH</td>
         </tr>
         <tr>
          <td />
          <td>Juniors 9-16yrs 18:00-19:00 LH</td>
          <td />
          <td />
          <td />
          <td />
          <td>All Age Randori : Once Per Month LH </td>
         </tr>
         <tr>
          <td />
          <td>Juniors 9-16yrs 18:00-19:30 LH</td>
          <td />
         </tr>
         <tr>
          <td />
          <td>Seniors 19:00-20:30 LH</td>
          <td>Women's Judo 19:00-20:00 SH</td>
          <td />
         </tr>
         <tr>
          <td />
          <td />
          <td>BJJ Sub Wrestling 20:00-21:30 SH</td>
         </tr>
        </tbody>
       </table>
      </div>
     </div>
    </div>
   </main>
  </Layout>
 )
}

export default Timetable
