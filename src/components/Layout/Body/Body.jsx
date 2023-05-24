import React, { useState, useEffect } from "react";
import './Body.css';
import {RegistrosForm} from './Seguimiento/RegistrosForm'
import {Marcas} from './Marcas/Marcas'
import {Ejercicios} from './Ejercicios/Ejercicios'


export const Body = (props) => {
    const { renderBody } = props

    const [renderPage, setRenderPage] = useState('')

    useEffect(() => {  
        switch (renderBody) {
            case 'Seguimiento':
                setRenderPage(<RegistrosForm/>)
                break;
            case 'Ejercicios':
                setRenderPage(<Ejercicios/>)
                break;
            case 'Marcas':
                setRenderPage(<Marcas/>)
                break;
            default:
                setRenderPage(<RegistrosForm/>)
                break;
        }
    }, [renderBody]);


    return (

        <div className="body">
            {renderPage}
        </div>
    )
}
