import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types';
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

//crear nuevos productos
export function crearNuevoProductoAction (producto){
    return async (dispatch) =>{
        dispatch(agregarProducto());
        try { 
            //insertar en la api
            await clienteAxios.post('/productos', producto);
            //insrtar en state
            dispatch(agregarProductoExito(producto)) 
         //Alerta
        Swal.fire(
            'Correcto',
            'El producto se agrego Correctamente',
            'success')
        }catch (error) { 
            console.log(error);
            //cambiar state por el error
            dispatch(agregarProductoError(true)) 
            //alerta
            Swal.fire({
                icon: 'error',
                title: 'Hubo un Error',
                text: 'intentalo nuevamente'
            })
        }
}   }
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload:true
})
const agregarProductoExito = ( producto ) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})
//FUNCION QE CARGA LOS PRODUCTOS DE LA BASE DE DATOS
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch ( descargarProductos() );
        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch ( descargaProductosExitoso(respuesta.data));
            
        } catch (error) {
            console.log(error);
            dispatch( descargaProductosError())
            
        }
    }
}
const descargarProductos = () =>({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});
const descargaProductosExitoso = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});
const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})
//SELECCIONA Y ELIMINA EL PRODUCTO
export function borrarProductoAction (id) {
    return async (dispatch) =>{
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
            Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado.',
                'success'
              )
        } catch (error) {
            dispatch(eliminarProductoError())
        }
    }
}
 const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProductoExito = () =>({
    type: PRODUCTO_ELIMINADO_EXITO
})
const eliminarProductoError =() =>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

export function obtenerProductoEditar (producto) {
    return(dispatch) =>{
        dispatch(obtenerProductoEditarAction(producto))
    }
}
const obtenerProductoEditarAction = producto =>({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})
export function editarProductoAction (producto){
    
    return async(dispatch) =>{
        dispatch(editarProducto())
        try {
             await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(editarProductoExito(producto))

        } catch (error) {
            dispatch(editarProductoError())
        }
    }
}
const editarProducto = () =>({
    type: COMENZAR_EDICION_PRODUCTO
})
const editarProductoExito = producto =>({
    type:PRODUCTO_EDITADO_EXITO,
    payload:producto
})
const editarProductoError = () =>({
    type: PRODUCTO_EDITADO_ERROR
})