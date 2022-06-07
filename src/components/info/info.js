import React from "react";
import './info.css';
import Sobre from '../../images/sobre.png';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const Read = () => {

    const{ isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAh9lq3PRR7cgYmOefTb8jVvFlroOdPteM"
    })


    return(

        <>
            <div id="quemsomos" className="sobre">
                <div className="empresa">
                    <div className="imagem">
                        <img id="img" src={Sobre} alt=''/>
                            <h2><li>
                                Empresa conceituada no ramo de Compra e Venda de carros novos e usados</li>
                                <li>Tem como lema a honestidade e transparencia em toda as suas compras e vendas</li>
                                </h2>
                                </div>
                        <div className="end">
                            <h1>Endereco</h1>
                            <div className="map">
                                {isLoaded ? (
                                    <GoogleMap
                                    mapContainerStyle={{width: '100%', height: '100%'}}
                                    center={{lat:3.08034,
                                        lng: 59.96957}}
                                    zoom={15}
                                    >
                                    <></>
                                    </GoogleMap>

                                        
                                ):<></>}
                            </div>

                        </div>
                    
                </div>
            </div>

        </>

    );

}

export default Read;