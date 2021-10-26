import React, { useEffect } from 'react';
import Producto from './Producto';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/obtenerProductosAction';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    // obtener el state
    const productos = useSelector(state => state.productos.productos);
    const error = useSelector(state => state.productos.error);
    const cargando = useSelector(state => state.productos.loading);

    return (
        <div>
            <h2>Listado de Productos</h2>

            {error ? <p className="error">Hubo un error</p> : null}

            {cargando ? <p>Cargando....</p> : null}

            <table>
            <caption>Un resumen de los grupos de música más famosos del Reino Unido</caption>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Productos
