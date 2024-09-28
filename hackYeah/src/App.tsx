import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/Course/Course';
import Exercises from './components/Exercises/Exercises';
import Traiding from './components/Traiding/Traiding';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/traiding" element={<Traiding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
