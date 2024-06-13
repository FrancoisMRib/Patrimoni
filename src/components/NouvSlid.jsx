import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "./Carrousel.css";
import { useState } from "react";

export function Slider() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        {
            id:1,
            image:'src/img/Daurade.jpg',
            text:"Dans quel quartier de Toulouse se trouve cette église ? Le mot-mystère contient sa deuxième lettre."
        },
        {
            id:2,
            image:'src/img/Toulouse-place-Capitole-Remi-Deligeon.jpeg',
            text:"Un système d’assainissement pour purifier l’eau boueuse puisée dans la Garonne aux alentours du cours Dillon et du château d’Eau a donné son nom à un parc toulousain très prisé.Quel est l’objet phare que l’on retrouve dans le nom de ce parc ? Garder pour le mot-mystère l’antépénultième lettre de cet objet"
        },
        {
            id:3,
            image:'src/img/Toulouse_pairie_des_filtres.jpg',
            text:"Quel était le nombre de capitouls ? Un chiffre à retenir que l’on trouve sur la façade du Capitole qu\'il convient de couper en deux parts égales"
        }
    ];

    return (
        <Carousel className="defil"
            autoPlay
            infiniteLoop
        >
            {images.map(slide => (
          <div key={slide.id} className="frame">
            <img src={slide.image} alt="" />
            <div className="overlay">
                <p>{slide.text}</p>
            </div>
          </div>
        ))}
        </Carousel>
    )
}