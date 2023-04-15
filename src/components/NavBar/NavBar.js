import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Repostería La Vie en Rose</h1>
            <div>
                <button>Productos</button>
                <button>Nosotros</button>
                <button>Domicilios</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar