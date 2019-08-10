import { Link } from "gatsby"
import React from "react"
import Conch from "../images/Conch"
import Ivy from "../images/Ivy"
import Stratus from "../images/Stratus"
import "./students.scss"

const Students = () => {
  return (
    <div className="students__wrapper">
      <h1 className="students__header">Meet The Students</h1>
      <div className="students__Image__wrapper">
        <Link to="/students/conch" className="students__house__insignia">
          <Conch />
        </Link>
        <Link to="/students/ivy" className="students__house__insignia">
          <Ivy />
        </Link>
        <Link to="/students/stratus" className="students__house__insignia">
          <Stratus />
        </Link>
      </div>
    </div>
  )
}

export default Students
