// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import Exercises from './components/Exercises/Exercises';
import Traiding from './components/Trading/Traiding';
import Sidebar from './components/Global/Sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/traiding" element={
          <div className="flex bg-gray-900">
            <div className="fixed h-full w-64">
              <Sidebar />
            </div>
            <div className="flex-1 ml-64 m-4 overflow-auto"> {/* Ustaw margines dla kontenera */}
              <Traiding />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
