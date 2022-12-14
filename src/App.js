import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Coins from './components/Coins';
// styles
import './index.css';

function App() {
  // array of coins from the API
  const [coins, setCoins] = useState([]);

  // api url
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  // fetching the API data
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(url);
        const data = await response.data;

        console.log(data);
        setCoins(data);
      };

      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Coins coins={coins} />} exact />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
