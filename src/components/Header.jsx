import { Link } from "react-router-dom"

import { useLocation } from 'react-router-dom'



const Header = () => {
    
        let location = useLocation();
        console.log('location.pathname:', location.pathname);
      
      
    return (
        <nav>
            {
               location.pathname === '/' ? <Link to={"/productos/nuevo"} >Agregar Producto &#43;</Link>
                                         : <Link to={'/'} > Ver Productos </Link>
            }                                
        </nav>
    )
}

export default Header
