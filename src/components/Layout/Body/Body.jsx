import React, { useState, useEffect } from "react";
import './Body.css';


export const Body = (props) => {
    const { renderBody } = props

    const [renderPage, setRenderPage] = useState('')

    useEffect(() => {   // pasar las mierdas esta a una enumeracion
        switch (renderBody) {
            case 'Seguimiento':
                setRenderPage('Seguimiento')
                break;
            case 'Ejercicios':
                setRenderPage('')
                break;
            case 'Marcas':
                setRenderPage('')
                break;
            default:
                setRenderPage('')
                break;
        }
    }, [renderBody]);


    return (

        <>{renderPage}</>
    )
}
