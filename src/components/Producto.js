import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2' 

//redux
import {  useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoEditar } from '../action/productoAction'

const Producto = ({producto}) => {
    const {nombre, precio, id} = producto;
    const history = useHistory();
    const dispatch = useDispatch();

    // confirmar si desea eliminar
    const confirmarEliminarProducto = id => {

        //preguntar al user
        Swal.fire({
            title: 'Seguro de Eliminar?',
            text: "El producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
                //pasarlo al action
                dispatch (borrarProductoAction(id))
              
            }
          })
    }
    const redireccionar = producto =>{
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
       <tr>
           <td>{nombre}</td>
                <td><span className='font-weight-bold'>${precio} </span></td>
           <td className='acciones'>
                <button 
                    type='button'
                    onClick={()=>redireccionar(producto)}
                    className='btn btn-primary mr-2'>
                    Editar
                </button>
                <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={()=>confirmarEliminarProducto(id)}
                > Eliminar </button>
           </td>
       </tr>
    )
}

export default Producto
