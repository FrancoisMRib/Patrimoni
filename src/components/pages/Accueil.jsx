import { Header } from "../Header";
import { Footer } from "../Footer";
import {Carrousel} from "./Carrousel";
import { Slider } from "./NouvSlid";

export function Accueil() {
    return (
        <div>
            <Header/>
            <p>Bienvenue sur le site de Patrimoni !!</p>
            <Slider/>
            <Footer/>
        </div>
    )
}