import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editarProductoAction} from '../action/productoAction'
import {useHistory} from 'react-router-dom'

const EditarProducto = () => { 
    const history = useHistory()
    const dispatch = useDispatch();
    //producto a editar
    const productoEditar = useSelector( state => state.productos.productoEditar)
    
    const [producto, guardarProducto] = useState({
        nombre:'',
        precio:''
    })
    useEffect(() => {
        guardarProducto(productoEditar)
    }, [productoEditar])

    const onChange = e =>{
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }
    const submit = (e) =>{
        e.preventDefault();
        dispatch(editarProductoAction(producto))
        history.push('/')
    }
    const {nombre, precio} = producto; 

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar Producto
                        </h2>
                        <form
                            onSubmit={submit}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    placeholder='Nombre Producto'
                                    className='form-control' 
                                    type="text"
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    placeholder='Precio Producto'
                                    className='form-control' 
                                    type="number"
                                    name='precio'
                                    value={precio}
                                    onChange={onChange}
                                />
                            </div>
                            <button 
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                type='submit'
                                
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
