import './Footer.css';

export function Footer() {
    return (
        <div id="footer">
            <div id="footerContactInfo">
                <p>Qui sommes-nous ?</p>
                <p>Nous contacter</p>
            </div>
            <div id="footerOptions">
                <div>
                    <p>Protection des données</p>
                    <p >Politique des cookies</p>
                    <br /><br />
                </div>
                <div className="footerPipe" />
                <div>
                    <p >Conditions générales</p>
                    <p >Mentions légales</p>
                    <br /><br />
                </div>
                <div className="footerPipe" />
                <div>
                    <p >Langue</p>
                    <p >Accessibilité</p>
                    <br /><br />
                </div>
            </div>
            <div id="footerCopyright">
                © Copyright 2024 Patrimoni | Tous droits réservés
            </div>
        </div>
    );
}
