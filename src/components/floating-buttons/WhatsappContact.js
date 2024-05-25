import React from "react";
import WhatsappIcon from "./assets/icons8-whatsapp.svg";
import './assets/FloatingButtons.css';

const WhatsappContact = () => {

    const handleClick = () => {
        window.open("https://wa.me/12016678140", "_blank");
    }

    return (
        <div className="whatsapp-contact">
            <button onClick={handleClick} className="whatsapp-contact-button">
                <img src={WhatsappIcon} alt="Whatsapp Icon" />
            </button>
        </div>
    );
};

export default WhatsappContact;