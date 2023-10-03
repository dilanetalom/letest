

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
          <Route path="/Dashboard" element={<Dashbord/>}/>
          <Route path="/Dashboard/Students" element={<Student/>}/>
          <Route path="/Dashboard/Courses" element={<Course/>}/>
          <Route path="/Dashboard/Asigned" element={<Asigned/>}/>
      </Routes>
    </Router>
  );
}

export default App;
