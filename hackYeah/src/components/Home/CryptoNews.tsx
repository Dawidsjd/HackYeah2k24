import React, { useEffect } from 'react';

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'market',
      isTransparent: true,
      displayMode: 'regular',
      width: '100%',
      height: '100%',
      colorTheme: 'light',
      locale: 'en',
      market: 'crypto',
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
    <div className="bg-transparent h-full w-full p-2 shadow-md  ">
      <div
        id="tradingview-widget"
        className="tradingview-widget-container__widget  w-full h-full "
      ></div>
    </div>
  );
};

export default TradingViewWidget;
