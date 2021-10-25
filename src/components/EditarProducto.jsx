const EditarProducto = () => {
    return (
        <div>
            <form>
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

                            <button type="submit">Edit</button>
                </form>

        </div>
    )
}

export default EditarProducto
