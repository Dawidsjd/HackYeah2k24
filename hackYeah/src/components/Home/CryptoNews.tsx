import React, { useEffect } from 'react';

const CryptoNews: React.FC = () => {
  useEffect(() => {
    // Dodanie skryptu po zamontowaniu komponentu
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: true,
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      colorTheme: 'dark',
      locale: 'en',
    });

    const container = document.getElementById('tradingview-widget');
    if (container) {
      container.appendChild(script);
    }

    // Czyszczenie (usunięcie skryptu, gdy komponent zostaje odmontowany)
    return () => {
      if (container) {
        container.innerHTML = ''; // Usuń skrypt po odmontowaniu komponentu
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        id="tradingview-widget"
        className="tradingview-widget-container__widget"
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default CryptoNews;
