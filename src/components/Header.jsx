import { Link } from "react-router-dom"


const Header = () => {
    return (
        <nav>
            <Link to={'/'} >
                Prductos
            </Link> 
         
            <Link to={"/productos/nuevo"}>
                Agregar Producto &#43;
            </Link>
    </nav>
    )
}

export default Header
