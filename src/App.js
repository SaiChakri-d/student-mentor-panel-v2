import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teachers from "./Teachers";
import Login from "./Login";
import Portal from "./Portal";
import Students from "./Students";
import { UserProvider } from "./usercontext";
import CreateTeachers from "./CreateTeachers";
import CreateStudents from "./CreateStudents";
import EditTeacher from "./EditTeacher";
import EditStudent from "./EditStudent";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Portal" element={<Portal />}>
            <Route path="TeachersList" element={<Teachers />} />
            <Route
              path="TeachersList/CreateTeachers"
              element={<CreateTeachers />}
            />
            <Route
              path="TeachersList/EditTeacher/:id"
              element={<EditTeacher />}
            />
            <Route path="StudentList" element={<Students />} />
            <Route
              path="StudentList/CreateStudents"
              element={<CreateStudents />}
            />
            <Route
              path="StudentList/EditStudent/:id"
              element={<EditStudent />}
            />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
