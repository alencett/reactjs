import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to='/'>
            <h1>Repostería La Vie en Rose</h1>
            </Link>
            <div className="categories">
                <NavLink to={'/category/postres'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>Postres</p></NavLink>
                <NavLink to={'/category/pudines'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>Pudines</p></NavLink>
                <NavLink to={'/category/cupcakes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>Cupcakes</p></NavLink>
                <NavLink to={'/aboutus'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><p>About Us</p></NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar