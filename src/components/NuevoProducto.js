<<<<<<< HEAD
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
//action de redux
import {crearNuevoProductoAction} from '../action/productoAction'

const NuevoProducto = ({history}) => {
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState('')

    //utilizar el dispatch ( asi se configura para usar una funcion de action)
    const dispatch = useDispatch();
    const agreagarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    //acceder al state
    const cargando = useSelector( state => state.productos.loading)
    const error = useSelector( state=> state.productos.error)
    
    //cuando hagan submit
    const submit = e =>{
        e.preventDefault();
        //validar form
        if(nombre.trim()==='' || precio <= 0){
            return;
        }

        //si no hay errores

        //crear el nuevo producto
        agreagarProducto({
            nombre,
            precio
        });
        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
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
                                    onChange={e => guardarNombre(e.target.value)}
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
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button 
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                type='submit'
                            >Agregar</button>
                        </form>
                        {cargando?<p>cargando</p>:null}
                        {error ?  
                            <p className='alert alert-danger p2 mt-4 text-center'>Hubo un Error</p>
                        :null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
=======
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//action de redux
import { crearNuevoProductoAction } from "../action/productoAction";

const NuevoProducto = ({ history }) => {
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState("");

  //utilizar el dispatch ( asi se configura para usar una funcion de action)
  const dispatch = useDispatch();
  const agreagarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  //acceder al state
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  //cuando hagan submit
  const submit = (e) => {
    e.preventDefault();
    //validar form
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }
    //si no hay errores
    //crear el nuevo producto
    agreagarProducto({
      nombre,
      precio,
    });
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submit}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  placeholder="Nombre Producto"
                  className="form-control"
                  type="text"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  placeholder="Precio Producto"
                  className="form-control"
                  type="number"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                type="submit"
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>cargando</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                Hubo un Error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
>>>>>>> 48e578286a99f5415d5a09f2cf314f7929961ee6
