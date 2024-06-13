import { Header } from "../Header";
import { Footer } from "../Footer";
import { Return } from "../Return";

export function Connexion() {
    return (
        <div>
            <Header/>
            <Return/>
            <div>
                <img src="src/img/background.svg" alt="" className="fondecran"/>
            </div>
            <div>
                <p>Bienvenue sur l'espace de connexion !</p>
            </div>
            <Footer/>
        </div>
    )
}