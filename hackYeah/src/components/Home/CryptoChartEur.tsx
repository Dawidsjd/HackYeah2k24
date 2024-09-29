import React, { useEffect } from 'react';

const CryptoChartEur: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: 'FX:EURUSD',
      width: '100%', // Ustawienie na 100%, aby było responsywne
      height: 325,
      locale: 'en',
      dateRange: '12M',
      colorTheme: 'dark',
      isTransparent: false,
      autosize: true, // Autosize dla pełnej szerokości kontenera
      largeChartUrl: '',
    });

    const container = document.getElementById('tradingview-mini-symbol-overview');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = ''; // Usuwanie widżetu podczas odmontowywania
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container shadow-custom-light w-full flex justify-center items-center rounded-xl overflow-hidden">
      <div
        id="tradingview-mini-symbol-overview"
        className="tradingview-widget-container__widget w-full"
      ></div>
    </div>
  );
};

export default CryptoChartEur;
