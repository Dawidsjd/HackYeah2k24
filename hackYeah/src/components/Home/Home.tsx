import React from 'react';
import Sidebar from '../Global/Sidebar';
import Welcome from './Welcome';
import Panel from './Panel';

const Home = () => {
  return (
    <div className="flex bg-primary">
      <Sidebar />
      <div className="flex-1 m-4 rounded-sm p-2">
        <Welcome />
        <Panel />
      </div>
    </div>
  );
};

export default Home;
