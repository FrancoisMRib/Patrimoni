import { Header } from "../Header";
import { Footer } from "../Footer";
import './Accueil.css';


export function Accueil() {
    return (
        <div>
            <Header/>
            <div id="HeaderLogo">
                <img src="src/img/Logo_Patrimoni-removebg-preview 2.png" alt='HeaderLogo' />
            </div>
            <div className="band0">
                <h3>Bienvenue sur le site de Patrimoni !!</h3>
                <h4>La premier site qui vous permettra de vous balader en visitant le patrimoine de la ville de </h4>
                <h3>TOULOUSE</h3>
            </div>
            
            <img src="src/img/background.svg" alt="" className="fondecran"/>
            <div className="select">
                <div className="buttongen">Cliquez ici si vous souhaitez avoir accès à un itinéraire programmé</div>
                <div className="buttongen">Cliquez ici si vous souhaitez avoir accès à un itinéraire personnalisé</div>
            </div>
            <Footer/>
        </div>
    )
}