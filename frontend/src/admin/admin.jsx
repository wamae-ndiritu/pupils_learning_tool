import { useNavigate } from "react-router-dom";
import Navbar from "./nav";
import { no_student, students, subject } from "../Mock_data";

function Admin() {
  const navigate = useNavigate();
  return (
    <div className="grid">
      <Navbar />
      <main>
        <section className="card inlinegrid2 ">
          <div>
            <h3>{no_student}</h3>
            <p> students</p>
          </div>

          <div>
            <h3>{subject.length}</h3>
            <p> subjects</p>
          </div>
          <div>
            <h3>{Object.keys(students).length}</h3>
            <p> Grades</p>
          </div>
        </section>
        <br />
        <section className="card ass">
          <h3>my subjects</h3>
          <div>
            <h5>kiswahili</h5>
            <ol>
              <li
                className="link-b"
                onClick={() => navigate("/admin/kiswahili")}
              >
                grade4
              </li>
              <li className="link-b" onClick={() => navigate("/admin/math")}>
                grade6
              </li>
            </ol>
            <button className="btn-cancel">delete subject</button>
          </div>
          <button className="btn">add subject</button>
        </section>
      </main>
    </div>
  );
}
export default Admin;
