import React, { useEffect } from 'react';

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      width: '100%',
      height: 325,
      colorTheme: 'dark',
      locale: 'en',
    });

    const container = document.getElementById('tradingview-widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = ''; // Usunięcie widżetu podczas odmontowywania
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full flex justify-center items-center">
      <div
        id="tradingview-widget"
        className="tradingview-widget-container__widget shadow-custom-light rounded-2xl overflow-hidden"
      ></div>
    </div>
  );
};

export default TradingViewWidget;
