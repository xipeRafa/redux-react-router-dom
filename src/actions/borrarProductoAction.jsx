import {OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id) );

        try {

            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );

            Swal.fire(
                'Eliminado',
                'El producto se eliminó correctamente',
                'success'
            )

        } catch (error) {
            console.log(error);
            dispatch( eliminarProductoError() );
        }
    }
}


const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});
const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});