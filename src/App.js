import { Routes, Route, NavLink, Navigate} from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import Contact from './components/Contact';
import Tech from './components/Tech';
import HTML from './components/HTML';
import CSS from './components/CSS';
import Products from './components/Products';


function App() {
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* link for home component */}
              <li className="nav-item">
                <NavLink className="nav-link" to="">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">ContactUs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="tech">Tech</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="users" element={ <Users/>}/>
        <Route path="contact" element={ <Contact/>} />
        <Route path="products" element={ <Products/>} />
        <Route path="tech" element={<Tech/>}>
          <Route path="html" element={<HTML />}/>
          {/* dealing with empty path */}
          <Route path="" element={<Navigate replace to="html" />}/>
          <Route path="css" element={<CSS />}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
