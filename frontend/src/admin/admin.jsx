import { useNavigate } from "react-router-dom";
import Navbar from "./nav";
import { no_student, students, subject } from "../Mock_data";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../slice";

function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin_data = useSelector(({ Admin }) => Admin.admin_data);
  function del(sub) {
    let p = { ...admin_data };
    delete p[`${sub}`];
    dispatch(update(p));
  }
  console.log(
    Object.keys(admin_data).map((p) => Object.keys(admin_data[p]).length)[0]
  );
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
            <h3>{Object.keys(admin_data).length}</h3>
            <p> subjects</p>
          </div>
          <div>
            <h3>
              {
                Object.keys(admin_data).map(
                  (p) => Object.keys(admin_data[p]).length
                )[0]
              }
            </h3>
            <p> Grades</p>
          </div>
        </section>
        <br />
        <section className="card ass">
          <h3>my subjects</h3>
          {Object.keys(admin_data).map((subject) => (
            <div>
              <h5>{subject}</h5>
              <ol>
                {Object.keys(admin_data[`${subject}`]).map((grade) => (
                  <li
                    className="link-b"
                    onClick={() => navigate(`/admin/${subject}/${grade}`)}
                  >
                    {grade}
                  </li>
                ))}
              </ol>

              <button className="btn-cancel" onClick={() => del(subject)}>
                delete subject
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
export default Admin;
