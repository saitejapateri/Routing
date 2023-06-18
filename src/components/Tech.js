import {Outlet,NavLink} from 'react-router-dom'

function Tech() {
  return (
    <div >
        {/* creating links */}
        <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
            <NavLink className="nav-link" to="html">HTML</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="css">CSS</NavLink>
        </li>
        </ul>
        {/* placeholder for components */}
        <div className="container text-center">
          <Outlet />
        </div>
    </div>
  )
}

export default Tech
