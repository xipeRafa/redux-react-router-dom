import {

    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
} from '../types';

import clienteAxios from '../config/axios';

// Función que descarga los productos de la base de datos
export function obtenerProductosAction() {  //esta se usa en el componente
      return async (dispatch) => {
          dispatch( descargarProductos() );
  
          try {
              const respuesta = await clienteAxios.get('/productos');
              dispatch( descargaProductosExitosa(respuesta.data) )
          } catch (error) {
              console.log(error);
              dispatch( descargaProductosError() )
          }
      }
  }
  
  const descargarProductos = () => ({
      type: COMENZAR_DESCARGA_PRODUCTOS,
      payload: true
  });
  
  const descargaProductosExitosa = productos => ({
      type: DESCARGA_PRODUCTOS_EXITO,
      payload: productos
  })
  const descargaProductosError = () => ({
      type: DESCARGA_PRODUCTOS_ERROR, 
      payload: true
  });
  