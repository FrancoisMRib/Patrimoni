import { Header } from "../Header";
import { Footer } from "../Footer";
import { Slider } from "../NouvSlid";
import { Link } from "react-router-dom";
import { Return } from "../Return";
import './Jeux.css'

export function Jeux() {
    return (
        <div>
            <Header/>
            <Return/>
            <div className="band0">
                <h3>Jeu de piste</h3>
                <h4>Trouvez le mot-mystère en collectant différents indices disséminés partout dans Toulouse</h4>
            </div>
            
            <Slider/>
            <Footer/>
        </div>
    )
}