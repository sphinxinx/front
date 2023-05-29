import React from "react";
import './Marcas.css'
import { useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';


export const Marcas = () => {

    const [marca, setMarca] = useState("")
    const [nombreEjercicio, setNombreEjercicio] = useState("")

    const getMarca = () => {
        Axios.get(`http://localhost:3001/marca/${nombreEjercicio}`).then((respuesta) => {
            const maxPeso = respuesta.data
            setMarca(maxPeso+"kg")
            
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se ha encontrado el ejercicio',
                footer: JSON.parse(JSON.stringify(error)).message
            })
        });
    }
    


    return (
        <div className="marcaContainer">
            <div className="barracontainer">
                <input id="barraBuscar" className="form-control inputBuscar" value={nombreEjercicio} placeholder="Ingrese el nombre del ejercicio" 
                onChange={(event) => {
                    setNombreEjercicio(event.target.value)
                }}/>
            </div>
            <Button className="botonMarca" variant="contained" color="success" onClick={getMarca}>Buscar</Button>
            <Typography color="grey" variant="h5" gutterBottom>Este es tu levantamiento mas pesado:</Typography>
            <Typography className="pesaje" color="white" variant="h2" gutterBottom><strong>{marca}</strong></Typography>
            
        </div>
    )
}
