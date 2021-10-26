import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
//hook de redux para leer lo que tenemos en el state

// Action product
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = ({history}) => {

    //state de el componente
     const [nombre, guardarNombre] = useState('');
     const [precio, guardarPrecio] = useState(0);

    // utilizar use dispatch y te crea una función
    const dispatch = useDispatch();

      // Acceder al state del store
      const cargando = useSelector( state => state.productos.loading );
      const error = useSelector(state => state.productos.error);
     /*  const alerta = useSelector(state => state.alerta.alerta);  */

    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // mandar llamar el action de productoAction
        const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) )

        agregarProducto({ //aqui se pone la info a enviar(state-claves)
            nombre,
            precio
        })

        // redireccionar
        setTimeout(() => {
            history.push('/');
        }, 2000);
        
    }

    return (
        <div>
                <form  onSubmit={submitNuevoProducto}>
                            <div>
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=> guardarNombre(e.target.value)} 
                                />
                            </div>

                            <div>
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    name="precio"
                                    value={precio}
                                    onChange={e=> guardarPrecio( Number(e.target.value) )} 
                                />
                            </div>

                            <button type="submit">Agregar</button>

                        { cargando ? <p>Cargando...</p> : null }
                        
                        { error ? <p className="error">Hubo un error</p> : null }
                </form>

        </div>
    )
}

export default NuevoProducto
