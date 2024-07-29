import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '3515324147'; 
  const message = 'Hola, me gustaría saber más sobre sus productos.'; 

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-container">
      <a href={url} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp size={30} />
      </a>
      <div className="whatsapp-message">¿Tienes alguna pregunta? ¡Contáctanos!</div>
    </div>
  );
};

export default WhatsAppButton;
