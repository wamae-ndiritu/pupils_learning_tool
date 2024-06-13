import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Topic from "./subject";
import Quize from "./admin/add_quiz";
import Admin from "./admin/admin";
import Stats from "./admin/Stats";
import Ass from "./admin/assignment";
import StudentDashboard from "./components/StudentDashboard";
import GradeScreen from "./screens/GradeScreen";
import GradesScreen from "./screens/GradesScreen";
import SubjectTopics from "./screens/SubjectTopics";
import SubjectScreen from "./screens/SubjectScreen";
import QuizesScreen from "./screens/QuizesScreen";
import QuizScreen from "./screens/QuizScreen";
import DashboardLayout from "./admin/Layout";
import Dashboard from "./screens/admin/Dashboard";
import ClassesScreen from "./screens/admin/ClassesScreen";
import ProfileScreen from "./screens/admin/ProfileScreen";
import { useSelector } from "react-redux";

const ProtectedLayout = () => {
  const { userInfo } = useSelector((state) => state.user);
  if (userInfo?.token?.access) {
    return <Outlet />;
  }
  return <Navigate to='/sign-in' />;
};
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
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<StudentDashboard />} />
          <Route path='/grades' element={<GradesScreen />} />
          <Route path='/grade/:id/subjects' element={<GradeScreen />} />
          <Route
            path='/grade/:gradeId/subjects/:subjectId/topics/:topicId'
            element={<SubjectTopics />}
          />
          <Route
            path='/grade/:gradeId/subjects/:subjectId/topics/:topicId/quizes'
            element={<QuizesScreen />}
          />
          <Route
            path='/grade/:gradeId/subjects/:subjectId/topics/:topicId/quizes/:quizId'
            element={<QuizScreen />}
          />
        </Route>
        <Route path='/subjects' element={<SubjectScreen />} />
        <Route path='/student/:sbj' element={<Topic />} />
        <Route path='/student/:sbj/:id' element={<Quize />} />

        {/* Admin */}
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/classes' element={<ClassesScreen />} />
          <Route path='/dashboard/profile' element={<ProfileScreen />} />
        </Route>
        {/* Admin */}
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
