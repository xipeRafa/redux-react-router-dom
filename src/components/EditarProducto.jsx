import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productoEditarAction';
import { useHistory } from 'react-router-dom';

const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    // nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })

    // producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);

    // llenar el state automaticamente
    useEffect(() => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({...producto, [e.target.name]: e.target.value})
    }

    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch(editarProductoAction(producto));

        history.push('/');
    }

    return (
        <>
            <h2>En Edicion:</h2>
            <form onSubmit={submitEditarProducto}>
                <div>
                    <label>Nombre Producto</label>
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeFormulario}
                    />
                </div>

                <div>
                    <label>Precio Producto</label>
                    <input
                        type="number"
                        name="precio"
                        value={precio}
                        onChange={onChangeFormulario}
                    />
                </div>

                <button type="submit">Guardar Cambios</button>
            </form>
        </>
    );
}

export default EditarProducto;