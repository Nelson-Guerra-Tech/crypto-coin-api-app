import React from 'react';
import CoinItem from './CoinItem';

function Coins({ coins }) {
  return (
    <div className='container'>
      <div className='heading'>
        <p>#</p>
        <p className='coin-name'>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Market Cap</p>
      </div>

      {coins.map((coin) => {
        return <CoinItem coinItem={coin} key={coin.id} />;
      })}
    </div>
  );
}

export default Coins;
