import React from 'react';
import QuickStart from './QuickStart';
import CheckKnowledge from './CheckKnowledge';
import CryptoList from './CryptoList';
const Panel = () => {
  const tileStyle = 'flex rounded-xl shadow-custom-light p-2 ';
  return (
    <div className="flex flex-col w-full mt-2 space-y-4">
      <div className="flex space-x-4">
        <div className={`justify-start w-1/2 bg-secondary ${tileStyle}`}>
          <CheckKnowledge />
        </div>
        <div className={`justify-end  w-1/2 ${tileStyle}`}>
          <QuickStart />
        </div>
      </div>
      <div className="flex space-x-4 mt-2">
        <div className={`justify-start w-2/3 ${tileStyle}`}>
          <CryptoList />
        </div>
        <div className={`justify-end w-1/3 ${tileStyle}`}>right top</div>
      </div>
    </div>
  );
};

export default Panel;
