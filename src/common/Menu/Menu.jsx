import { Link } from "react-router-dom"
import "./Menu.scss";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="container menu__container">
        <ul className="menu__row">
          <li>
            <Link to="/">Dashbord</Link>
          </li>
          <li>
            <Link to="/Sales">Sales</Link>
          </li>
          <li>
            <Link to="/Catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/Customers">Customers</Link>
          </li>
          <li>
            <Link to="/Reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
