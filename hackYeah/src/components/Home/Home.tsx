import React from 'react';
import Sidebar from '../Global/Sidebar';
import Welcome from './Welcome';
import Panel from './Panel';

const Home = () => {
  return (
    <div className="flex bg-gray-900 ">
      <Sidebar />
      <div className="flex-1 m-4  shadow-custom-light rounded-sm">
        <Welcome />
        <Panel />
      </div>
    </div>
  );
};

export default Home;
