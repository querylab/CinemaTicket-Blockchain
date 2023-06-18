import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const Navigation = ({ account, setAccount }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [
    'https://i.imgur.com/J1TFzXj.png',
    'https://i.imgur.com/TYt9qkr.png',
    'https://i.imgur.com/rVRv37m.png',
    // Agrega aquí más URLs de imágenes
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);

    return () => clearInterval(interval);
  }, );

  const backgroundImageStyle = {
    backgroundImage: `url('${imageUrls[currentIndex]}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <nav style={backgroundImageStyle}>
      <div className="nav__brand">
        <h1>Cinema Theatre</h1>

        <input className="nav__search" type="text" placeholder="Search Movies" />

        <ul className="nav__links">
          <li>
            <a href="/">Sci-fi</a>
          </li>
          <li>
            <a href="/">Action</a>
          </li>
          <li>
            <a href="/">Drama</a>
          </li>
          <li>
            <a href="/">Thriller</a>
          </li>
        </ul>
      </div>

      {account ? (
        <button type="button" className="nav__connect">
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button type="button" className="nav__connect" onClick={connectHandler}>
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navigation;