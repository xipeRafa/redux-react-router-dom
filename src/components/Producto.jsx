import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; 
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/borrarProductoAction';
import { obtenerProductoEditar } from '../actions/productoEditarAction'

const Producto = ({ producto }) => {

    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory(); 

    const confirmarEliminarProducto = id => {

        Swal.fire({
              title: '¿Estas seguro?',
              text: "Un producto que se elimina no se puede recuperar",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, eliminar!!',
              cancelButtonText: 'Cancelar'
        }).then((result) => {
              if (result.value) {
                  dispatch( borrarProductoAction(id) );
              }
        })

    }

    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto));
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr key={id}>
            <td>  {nombre}</td>
            <td>$ {precio} </td>
            <td>
                <button type="button" onClick={() => redireccionarEdicion(producto)}>
                    Editar
                </button>
                <button type="button" onClick={() => confirmarEliminarProducto(id)}>
                    Eliminar 
                </button>
            </td>
        </tr>
    );
}

export default Producto;