import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.css"
import {Link, Outlet} from "react-router-dom"

const Courses = () => {
  return (
    <div className="container">
    <h1>My Courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <Link className="btn btn-primary" to="/courses/allcourses">Courses</Link>
    <Link className="btn btn-danger" to="/courses/bundles">Bundles</Link>
    <Outlet/>
    </div>
  )
}

export default Courses
