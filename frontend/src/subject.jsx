import { useParams } from "react-router-dom";
import Quize from "./quizes";
import Navbar from "./nav";

import { useSelector } from "react-redux";
function Topic() {
  const data = useSelector(({ Admin }) => Admin.admin_data);
  const grade = useSelector(({ Student }) => Student.grade);
  let subject = useParams().id;
  let t_opic = useParams().sbj;
  let assignment = {};
  Object.keys(data[t_opic][grade][subject]).map((k) =>
    Object.values(data[t_opic][grade][subject]).map((g) => (assignment[k] = g))
  );
  return (
    <div className="grid">
      <Navbar />
      <main>
        <section className="card">
          <h1>{subject}</h1>
        </section>{" "}
        <br />
        <section className="card ass">
          <h3>Assignments</h3>
          {Object.keys(assignment).map((i) => (
            <details>
              <summary>{i}</summary>
              <Quize quiz={assignment[`${i}`]} />
            </details>
          ))}
        </section>
        <br />
        <section className="card">results and progress</section>
      </main>
    </div>
  );
}
export default Topic;
