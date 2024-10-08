import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import ExamStart from "./components/Exams/Home";
import Traiding from "./components/Trading/Trading";
import Sidebar from "./components/Global/Sidebar";
import KnowledgeTest from "./components/Global/KnowledgeTest";
import Positions from "./components/Trading/components/SubPages/Positions";
import CourseDetail from "./components/Course/CourseDetail"; // Import CourseDetail
import { useState } from "react";
import { courses } from "./components/Course/Courses"; // Import your courses array here

const App = () => {
  const [level, setLevel] = useState(-1);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home level={level} />} />
        <Route
          path="/course"
          element={<Course level={level} setLevel={setLevel} />}
        />
        <Route
          path="/course/:id"
          element={<CourseDetail courses={courses} />}
        />{" "}
        {/* Add new route */}
        <Route path="/exams" element={<ExamStart level={level} />} />
        <Route
          path="/knowledge-test"
          element={<KnowledgeTest setLevel={setLevel} />}
        />
        <Route path="/traiding/positions" element={<Positions />} />
        <Route
          path="/traiding"
          element={
            <div className="flex bg-gray-900 w-full">
              <div className="fixed h-full" style={{ width: "inherit" }}>
                <Sidebar />
              </div>
              <div className="flex-1 ml-48 overflow-auto">
                {" "}
                {/* Ustaw margines dla kontenera */}
                <Traiding />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
