import { Navigate, Outlet, Route, Router, Routes } from "react-router-dom";
import Sign_up from "./signup";
import Sign_in from "./Login";
import Student from "./student_page";
import Topic from "./subject";
import Quize from "./admin/add_quiz";
import Admin from "./admin/admin";
import Stats from "./admin/Stats";
import Ass from "./admin/assignment";
import { useSelector } from "react-redux";
function App() {
  const log = useSelector(({ Session }) => Session.logged);
  const admin = useSelector(({ Session }) => Session.isadmin);
  function Auth() {
    if (!log) {
      return <Navigate to="/sign-in" />;
    }
    return <Outlet />;
  }
  function Isadmin() {
    //to see it wwork go to sign-up and check techer then login
    if (log && !admin) {
      return <Navigate to={"/student"} />;
    }
    return <Outlet />;
  }
  return (
    <Routes>
      <Route path="/sign-up" element={<Sign_up />} />
      <Route element={<Auth />}>
        <Route element={<Isadmin />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:sbj/:grade" element={<Ass />} />
          <Route path="/admin/Students" element={<Stats />} />
          <Route path="/admin/new-assignment" element={<Quize />} />
        </Route>
        <Route path="/student" element={<Student />} />
        <Route path="/student/:sbj/:id" element={<Topic />} />
      </Route>
      <Route path="*" element={<Sign_in />} />
    </Routes>
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
