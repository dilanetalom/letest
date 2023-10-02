

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register";
import Dashbord from "./Dashbord/dashbord/Dashbord";
import Student from "./Dashbord/Student/Student";
import Course from "./Dashbord/Courses/Course";
import Asigned from "./Dashbord/Asigned/Asigned";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashbord" element={<Dashbord/>}/>
          <Route path="/dashbord/student" element={<Student/>}/>
          <Route path="/dashbord/course" element={<Course/>}/>
          <Route path="/dashbord/asigned" element={<Asigned/>}/>
      </Routes>
    </Router>
  );
}

export default App;
