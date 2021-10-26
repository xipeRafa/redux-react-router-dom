import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction } from '../actions/borrarProductoAction';

const Producto = ({ producto }) => {

    const dispatch = useDispatch();

    const { nombre, precio, id } = producto;

     // Confirmar si desea eliminarlo
     const confirmarEliminarProducto = id => {
           // preguntar al usuario
      /*   Swal.fire({
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
                // pasarlo al action
                dispatch( borrarProductoAction(id) );
            }
        }); */
        dispatch( borrarProductoAction(id) );
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span> $ {precio} </span></td>
            <td>
                <Link to={`/productos/editar/${id}`} type="button">
                    Editar
                </Link>
                <Link type="button"  onClick={() => confirmarEliminarProducto(id)}>
                    Eliminar
                </Link>
            </td>
        </tr>
    );
}

export default Producto;