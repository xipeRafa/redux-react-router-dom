import React from 'react';
import { Link } from 'react-router-dom';

const Producto = ({ producto }) => {
    const { nombre, precio, id } = producto;
    return (
        <tr>
            <td>{nombre}</td>
            <td><span> $ {precio} </span></td>
            <td>
                <Link to={`/productos/editar/${id}`} type="button">
                    Editar
                </Link>
                <Link type="button">
                    Eliminar
                </Link>
            </td>
        </tr>
    );
}

export default Producto;