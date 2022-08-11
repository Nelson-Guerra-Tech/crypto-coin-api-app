import React from 'react';

function CoinItem({ coinItem }) {
  return (
    <div className='coin-row'>
      <p>{coinItem.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coinItem.image} alt='' />
        <p>{coinItem.symbol}</p>
      </div>

      <p>{coinItem.current_price}</p>
      <p>{coinItem.price_change_percentage_24h}</p>
      <p className='hide-mobile'>{coinItem.total_volume}</p>
      <p className='hide-mobile'>{coinItem.market_cap}</p>
    </div>
  );
}

export default CoinItem;
