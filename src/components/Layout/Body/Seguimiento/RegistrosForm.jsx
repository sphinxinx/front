import React, { useState,useEffect } from "react";
import './RegistrosForm.css'
import Button from '@mui/material/Button'
import Axios from "axios";


export const RegistrosForm = () => {

    const [ejercicio, setEjercicio] = useState("")
    const [series, setSeries] = useState(0)
    const [repeticiones, setRepeticiones] = useState("")
    const [peso, setPeso] = useState("")
    const [fecha, setFecha] = useState("")

    const [registrosList,setRegistros] = useState([])
    
    const getRegistros = () => {
        Axios.get("http://localhost:3001/registros").then((respuesta) => {
            setRegistros(respuesta.data);
        });
    }

    useEffect(() => { 
        getRegistros() 
    }, []);   

    const registrarDatos = () => {
        Axios.post("http://localhost:3001/create",{
            ejercicio: ejercicio,
            series: series,
            repeticiones: repeticiones,
            peso: peso,
            fecha: fecha
        }).then(() => {
            getRegistros();
            alert("Ejercicio registrado")
        });
    }

    return (
        <div className="registros">
            <div className="datos">
                <label>Ejercicio:
                    <input placeholder="Nombre del ejercicio" type="text"
                        onChange={(event) => {
                            setEjercicio(event.target.value);
                        }} />
                </label>
                <label>Series:
                    <input placeholder="Numero de series" type="number"
                        onChange={(event) => {
                            setSeries(event.target.value);
                        }} />
                </label>
                <label>Repeticiones/s:
                    <input placeholder="Ej: 12-10-8..." type="text"
                        onChange={(event) => {
                            setRepeticiones(event.target.value);
                        }} />
                </label>
                <label>Peso maximo (Kg):
                    <input placeholder="Peso maximo levantado" type="number"
                        onChange={(event) => {
                            setPeso(event.target.value);
                        }} />
                </label>
                <label>Fecha:
                    <input id="inputFecha" placeholder="Fecha de realizacion" type="date"
                        onChange={(event) => {
                            setFecha(event.target.value);
                        }} />
                </label>
                <Button variant="contained" color="success" onClick={registrarDatos}>Registrar</Button>
            </div>
            <div className="lista">
                {
                    registrosList.map((val,key) => {
                        return <div className="">{val.ejercicio}</div>
                    })
                }
            </div>
        </div>
    )
}

