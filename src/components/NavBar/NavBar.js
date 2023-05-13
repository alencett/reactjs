import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to='/'>
            <h1 className="reposteria">Repostería La Francesa |</h1>
            </Link>
            <div className="categories">
                <NavLink to={'/category/postres'} className="ind-category"><p>Postres</p></NavLink>
                <NavLink to={'/category/pudines'} className="ind-category"><p>Pudines</p></NavLink>
                <NavLink to={'/category/cupcakes'} className="ind-category"><p>Cupcakes</p></NavLink>
                <NavLink to={'/aboutus'} className="ind-category"><p>About Us</p></NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar