import React from "react";
import './Ejercicios.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';


const jalon = [{ title: "Jalon al pecho", img: require("../../../../resources/jalonpecho.jpg") },
{ title: "Remo con barra", img: require("../../../../resources/remobarra.jpg") },
{ title: "Dominadas", img: require("../../../../resources/dominadas.png") },
{ title: "Curl alterno mancuernas", img: require("../../../../resources/curlalternomancuerna.jpg") }]

const empuje = [{ title: "Press banca", img: require("../../../../resources/pressbanca.jpg") },
{ title: "Press militar mancuernas", img: require("../../../../resources/pressmilitar.jpg") },
{ title: "Fondos", img: require("../../../../resources/fondos.jpg") },
{ title: "Extension de triceps polea", img: require("../../../../resources/extensiontricepspolea.jpg") }]

const pierna = [{ title: "Sentadilla", img: require("../../../../resources/sentadilla.jpg") },
{ title: "Zancada", img: require("../../../../resources/zancada.jpg") },
{ title: "Sentadilla bulgara", img: require("../../../../resources/sentadillabulgara.jpg") },
{ title: "Peso Muerto", img: require("../../../../resources/pesomuerto.jpg") }]

export const Ejercicios = () => {



    return (
        <div className="ejerciciosContainer">
            <div className="posicionTitulo">
                <hr />
                <Typography className="titulo" variant="h4" gutterBottom>
                    Jalon
                </Typography>
                <hr />
            </div>

            <Grid className="rutinaContainer" container spacing={2} justifyContent="center" >
                {jalon.map((elemento, index) =>
                    <Grid item xs={12} md={6} lg={6} key={index}>
                        <Card sx={{ maxWidth: 545 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={elemento.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {elemento.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>

            <div className="posicionTitulo">
                <hr />
                <Typography className="titulo" variant="h4" gutterBottom>
                    Empuje
                </Typography>
                <hr />
            </div>
            <Grid className="rutinaContainer" container spacing={2} justifyContent="center" alignItems="center">
                {empuje.map((elemento, index) =>
                    <Grid item xs={12} md={6} lg={6} key={index}>
                        <Card sx={{ maxWidth: 545 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={elemento.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {elemento.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>

            <div className="posicionTitulo">
                <hr />
                <Typography className="titulo" variant="h4" gutterBottom>
                    Pierna
                </Typography>
                <hr />
            </div>
            <Grid className="rutinaContainer" container spacing={2} justifyContent="center" alignItems="center">
                {pierna.map((elemento, index) =>
                    <Grid item xs={12} md={6} lg={6} key={index}>
                        <Card sx={{ maxWidth: 545 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={elemento.img}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {elemento.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}
