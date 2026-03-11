import { useState } from 'react';

function MessageBouton() {
    const [message, setMessage] = useState('Cliquez sur le bouton');

    function changerMessage() {
        if (message === "Cliquez sur le bouton") {
            setMessage("Vous avez cliqué sur le bouton !");
        } else {
            setMessage("Cliquez sur le bouton");
        }
    }

    return (
        <div>
            <h2>Bouton de message</h2>
            <button onClick={changerMessage}>Cliquer</button>
            <p>{message}</p>
        </div>
);
}

export default MessageBouton;