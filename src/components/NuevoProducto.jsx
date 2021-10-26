
import { crearNuevoProductoAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux';


const NuevoProducto = () => {

       
    // utilizar use dispatch y te crea una función
    const dispatch = useDispatch();

    // cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // mandar llamar el action de productoAction
        const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

        agregarProducto()
    }

    return (
        <div>
                <form  onSubmit={submitNuevoProducto} >
                            <div>
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    name="nombre"
                                  /*   value={nombre}
                                    onChange={e => guardarNombre(e.target.value)} */
                                />
                            </div>

                            <div>
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    name="precio"
                                  /*   value={precio}
                                    onChange={e =>  guardarPrecio( Number(e.target.value) )} */
                                />
                            </div>

                            <button type="submit">Agregar</button>
                </form>

        </div>
    )
}

export default NuevoProducto
