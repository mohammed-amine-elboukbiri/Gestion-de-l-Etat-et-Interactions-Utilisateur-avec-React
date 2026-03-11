import { useState } from "react";

function Compteur() {
    const [compte, setCompte] = useState(0);

    function incrementer() {
        setCompte(compte + 1);
    }

    function decrementer() {
        setCompte(compte - 1);
    }

    function reset() {
        setCompte(0);
    }

    return (
        <div>
            <h2>Compteur React</h2>

            <button onClick={incrementer}>Incrémenter</button><br/><br/>
            <button onClick={decrementer}>Décrémenter</button><br/><br/>
            <button onClick={reset}>Réinitialiser</button><br/>

            <p>Vous avez cliqué {compte} fois.</p>
        </div>
    );
}

export default Compteur;