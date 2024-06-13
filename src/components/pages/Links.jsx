import { Header } from "../Header";
import { Footer } from "../Footer";
import { Return } from "../Return";
import './Links.css';

export function Liens() {
    return (
        <div>
            <Header/>
            <Return/>
            <div>
                <p>Ce sont les liens !</p>
            </div>
            
            <Footer/>
            
        </div>
    )
}