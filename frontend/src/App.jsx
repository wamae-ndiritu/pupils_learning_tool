import { Route, Routes } from "react-router-dom";
import Sign_up from "./signup";
import Sign_in from "./Login";
import Student from "./student_page";
import Topic from "./subject";
import Quize from "./quizes";
import Navbar from "./nav";
import Admin from "./admin/admin";
import Stats from "./admin/Stats";
import Ass from "./admin/assignment";
function App() {
  return (
    <>
      {/*  <Navbar /> */}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:sbj" element={<Ass />} />
        <Route path="/admin/Students" element={<Stats />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:sbj" element={<Topic />} />
        <Route path="/student/:sbj/:id" element={<Quize />} />
      </Routes>
    </>
  );
}
export default App;
/*
    PAGES
    ✔1.login(normal)
    2.admin page
       ✔1.number of students>list of students
       ✔2.number of subjects>adding subject && list of assignments>assignment
       3.statistics of students who have passed or failed
       4.top students in your class
    3. students page
        1.shows progress
        ✔2.subjects>topics>assinments
        ✔3.nav-bar 
        ✔4.assignment 
    FORMS
    ✔1.log-in/signin
    2.Adding questions
    3.assignment
*/
