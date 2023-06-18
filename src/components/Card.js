import { ethers } from 'ethers';
import { useState } from 'react';

const Card = ({ occasion, toggle, setToggle, setOccasion }) => {
  const [isLoading, setIsLoading] = useState(false);

  const togglePop = () => {
    setOccasion(occasion);
    toggle ? setToggle(false) : setToggle(true);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    // Realiza cualquier acción asincrónica aquí, como una llamada a una API o una transacción de Ethereum

    // Ejemplo de espera simulada de 2 segundos
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    togglePop();
  };

  return (
    <div
      className='card'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '3px solid #fff',
        backgroundRepeat: 'no-repeat',
        fontWeight: 'bold',
        fontSize: '24px',
        padding: '40px',
        margin: '40px',
        color: '#000',
        textAlign: 'center',
        textShadow: '2px 2px 4px #000',
        borderRadius: '40px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        width: '500px',
        height: '300px',
        display: 'inline-block',
        
        

      
       // Cambiado a 'center'
        background: 'linear-gradient(to right, #685e68, #f8cd82)'
      }}
    >
      <div
        className='card__info'
        style={{
          border: '7px solid #fff',
          borderRadius: '20px',
          color: '#fff',
          padding: '20px',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #685e68, #f8cd82)',
          marginBottom: '20px'
        }}
      >
        <p className='card__date'>
          <strong>{occasion.date}</strong>
          <br />
          {occasion.time}
        </p>

        <h3 className='card__name'>{occasion.name}</h3>

        <p className='card__location'>
          <small>{occasion.location}</small>
        </p>

        <p className='card__cost'>
          <strong>{ethers.utils.formatUnits(occasion.cost.toString(), 'ether')}</strong> ETH
        </p>
      </div>

      {occasion.tickets.toString() === '0' ? (
        <button
          type='button'
          className='card__button--out'
          disabled
          style={{
            border: '7px solid #fff',
            borderRadius: '20px',
            padding: '20px',
            fontWeight: 'bold',
            display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
          }}
         
        >
          Sold Out
        </button>
      ) : (
        <button
        type='button'
        className='card__button'
        onClick={() => handleButtonClick()}
        disabled={isLoading}
        style={{
          border: '7px solid #fff',
          borderRadius: '20px',
          padding: '20px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto' // Agregado para centrar horizontalmente
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(to right, #f8cd82,#f8cd82)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(to right, #685e68, #685e68)';
        }}
      >
        {isLoading ? (
          <div className='spinner' style={{ borderTopColor: '#000' }} />
        ) : (
          'Buy Tickets'
        )}
      </button>
      )}
    </div>
  );
};

export default Card;