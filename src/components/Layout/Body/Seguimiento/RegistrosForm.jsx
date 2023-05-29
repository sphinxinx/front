import React, { useState, useEffect } from "react";
import './RegistrosForm.css'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const notificacion = withReactContent(Swal)

export const RegistrosForm = () => {

    const [ejercicio, setEjercicio] = useState("")
    const [series, setSeries] = useState("")
    const [repeticiones, setRepeticiones] = useState("")
    const [peso, setPeso] = useState("")
    const [fecha, setFecha] = useState("")
    const [ID, setID] = useState("")

    const [editar, setEditar] = useState(false)

    const [registrosList, setRegistros] = useState([])

    useEffect(() => {
        getRegistros()
    }, []);

    const getRegistros = () => {
        Axios.get("http://localhost:3001/registros").then((respuesta) => {
            setRegistros(respuesta.data);
        });
    }

    const limpiarCampos = () => {
        setEjercicio("");
        setSeries("");
        setRepeticiones("");
        setPeso("");
        setFecha("");
        setID("");
        setEditar(false)
    }


    const editarRegistro = (val) => {
        setEditar(true)

        setEjercicio(val.ejercicio)
        setSeries(val.series)
        setRepeticiones(val.repeticiones)
        setPeso(val.peso_maximo)
        setFecha(val.fecha)
        setID(val.IDregistro)


    }

    const registrarDatos = () => {
        Axios.post("http://localhost:3001/create", {
            ejercicio: ejercicio,
            series: series,
            repeticiones: repeticiones,
            peso: peso,
            fecha: fecha
        }).then(() => {
            getRegistros();
            limpiarCampos();
            notificacion.fire({
                title: <strong>Registro añadido</strong>,
                html: <i>El ejercicio <strong>{ejercicio}</strong> fue registrado con exito</i>,
                icon: 'success'
            })
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se ha insertado el registro',
                footer: JSON.parse(JSON.stringify(error)).message
            })
        });
    }

    const update = () => {
        Axios.put("http://localhost:3001/update", {
            IDregistro: ID,
            ejercicio: ejercicio,
            series: series,
            repeticiones: repeticiones,
            peso: peso,
            fecha: fecha
        }).then(() => {
            getRegistros();
            limpiarCampos();
            notificacion.fire({
                title: <strong>Registro actualizado</strong>,
                html: <i>El ejercicio <strong>{ejercicio}</strong> fue actualizado con exito</i>,
                icon: 'success'
            })
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se ha actualizado el registro',
                footer: JSON.parse(JSON.stringify(error)).message
            })
        });
    }

    const eliminarRegistro = (ID) => {
        Axios.delete(`http://localhost:3001/delete/${ID}`, {
        }).then(() => {
            getRegistros();
            limpiarCampos();
            notificacion.fire({
                title: <strong>Registro eliminado</strong>,
                html: <i>El ejercicio con el ID <strong>{ID}</strong> fue eliminado con exito</i>,
                icon: 'success'
            })
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se ha eliminado el registro',
                footer: JSON.parse(JSON.stringify(error)).message
            })
        })
    }

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    SEGUIMIENTO
                </div>
                <div className="card-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Ejercicio:</span>
                        <input type="text" value={ejercicio} className="form-control" placeholder="Nombre del ejercicio" aria-label="Username" aria-describedby="basic-addon1"
                            onChange={(event) => {
                                setEjercicio(event.target.value);
                            }} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Series:</span>
                        <input type="number" value={series} className="form-control" placeholder="Numero de series" aria-label="Username" aria-describedby="basic-addon1"
                            onChange={(event) => {
                                setSeries(event.target.value);
                            }} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Repeticiones/s:</span>
                        <input type="text" value={repeticiones} className="form-control" placeholder="Ej: 12-10-8..." aria-label="Username" aria-describedby="basic-addon1"
                            onChange={(event) => {
                                setRepeticiones(event.target.value);
                            }} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Peso maximo (Kg):</span>
                        <input type="number" value={peso} className="form-control" placeholder="Peso maximo levantado" aria-label="Username" aria-describedby="basic-addon1"
                            onChange={(event) => {
                                setPeso(event.target.value);
                            }} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Fecha:</span>
                        <input id="inputFecha" value={fecha} type="date" className="form-control" placeholder="Fecha de realizacion" aria-label="Username" aria-describedby="basic-addon1"
                            onChange={(event) => {
                                setFecha(event.target.value);
                            }} />
                    </div>
                </div>
                <div className="card-footer text-muted">
                    {
                        editar === true ?
                            <>
                                <Button variant="contained" onClick={update}>Actualizar</Button>
                                <Button variant="contained" className="cancelar" color="error" onClick={limpiarCampos}>Cancelar</Button>
                            </>
                            : <Button variant="contained" color="success" onClick={registrarDatos}>Registrar</Button>
                    }

                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ejercicio</th>
                        <th>Series</th>
                        <th>Repeticiones</th>
                        <th>Peso Maximo</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registrosList.map((val, key) => {
                            return <tr key={val.IDregistro} className="separated-row">
                                <th>{val.IDregistro}</th>
                                <td>{val.ejercicio}</td>
                                <td>{val.series}</td>
                                <td>{val.repeticiones}</td>
                                <td>{val.peso_maximo}</td>
                                <td>{val.fecha}</td>
                                <td><ButtonGroup variant="contained" aria-label="outlined primary button group">
                                    <Button onClick={() => {
                                        editarRegistro(val)
                                    }}>Editar</Button>
                                    <Button color="error" onClick={() => {
                                        eliminarRegistro(val.IDregistro)
                                    }}>Borrar</Button>
                                </ButtonGroup>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

