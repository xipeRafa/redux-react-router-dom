import { useDispatch, useSelector } from 'react-redux';
/* import { editarProductoAction } from '../actions/productoEditar'; */
import { useHistory } from 'react-router-dom';


const EditarProducto = () => {
       // producto a editar
       const producto = useSelector(state => state.productos.productoeditar);
       const { nombre, precio } = producto;    
    return (
        <div>
            <form>
                <div>
                    <label>Nombre Producto</label>
                    <input
                        type="text"
                        name="nombre"
                       value={nombre}
                      /*onChange={e => guardarNombre(e.target.value)} */
                    />
                </div>

                <div>
                    <label>Precio Producto</label>
                    <input
                        type="number"
                        name="precio"
                      value={precio}
                    /*  onChange={e =>  guardarPrecio( Number(e.target.value) )} */
                    />
                </div>

                <button type="submit">Edit</button>
            </form>

        </div>
    )
}

export default EditarProducto
