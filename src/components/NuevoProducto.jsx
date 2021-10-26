import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Action product
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    //state de el componente
     const [nombre, guardarNombre] = useState('');
     const [precio, guardarPrecio] = useState(0);

    // utilizar use dispatch y te crea una función
    const dispatch = useDispatch();

    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // mandar llamar el action de productoAction
        const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) )

        agregarProducto({ //aqui se pone la info a enviar(state-claves)
            nombre,
            precio
        })
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
                </form>

        </div>
    )
}

export default NuevoProducto
