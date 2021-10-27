import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// Action product
import { crearNuevoProductoAction } from '../actions/crearNuevoProductoAction';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

const NuevoProducto = ({ history }) => {

    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);
    const alerta = useSelector(state => state.alerta.alerta);  

    const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto))

    const submitNuevoProducto = e => {
        e.preventDefault();

        if(nombre.trim() === '' || precio <= 0) {

            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'error'
            }
            dispatch( mostrarAlerta(alerta) );

            return;
        }

        dispatch( ocultarAlertaAction() );

        agregarProducto({ nombre, precio })

        setTimeout(() => { history.push('/') }, 2000);

    }

    return (
        <div>

            <h2>Agregar Producto</h2>

            {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null }

            <form onSubmit={submitNuevoProducto}>
                <div>
                    <label>Nombre Producto</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>

                <div>
                    <label>Precio Producto</label>
                    <input
                        type="number"
                        name="precio"
                        value={precio}
                        onChange={e => guardarPrecio(Number(e.target.value))}
                    />
                </div>

                <button type="submit">Agregar</button>

                {cargando ? <p>Cargando...</p> : null}

                {error ? <p className="error">Hubo un error</p> : null}
            </form>

        </div>
    )
}

export default NuevoProducto
