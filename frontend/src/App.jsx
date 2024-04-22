import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Student from "./student_page";
import Topic from "./subject";
import Quize from "./admin/add_quiz";
import Admin from "./admin/admin";
import Stats from "./admin/Stats";
import Ass from "./admin/assignment";
import StudentDashboard from "./components/StudentDashboard";
import GradeScreen from "./screens/GradeScreen";
function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/:sbj/:grade' element={<Ass />} />
        <Route path='/admin/Students' element={<Stats />} />
        <Route path='/admin/new-assignment' element={<Quize />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='' element={<StudentDashboard />} />
        <Route path='/student/:sbj' element={<Topic />} />
        <Route path='/student/:sbj/:id' element={<Quize />} />
        <Route path='/grade/:id/subjects' element={<GradeScreen />} />
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
