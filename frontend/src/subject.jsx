import { useParams } from "react-router-dom";
import Quize from "./quizes";
import Navbar from "./nav";

import { useSelector } from "react-redux";
function Topic() {
  const data = useSelector(({ Admin }) => Admin.admin_data);
  const grade = useSelector(({ Student }) => Student.grade);
  const Results = useSelector(({ Student }) => Student.results);
  let subject = useParams().id;
  let t_opic = useParams().sbj;
  let assignment = {};
  //searches for assgnment to display
  Object.keys(data[t_opic][grade][subject]).forEach((k) =>
    Object.values(data[t_opic][grade][subject]).forEach(
      (g) => (assignment[k] = g)
    )
  );
  ///searches for the respective results
  let results = [];
  Results.forEach((res) => {
    res[subject] && results.push(res[subject]);
  });
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
              <Quize quiz={assignment[`${i}`]} num={i} />
            </details>
          ))}
        </section>
        <br />
        <section className="card">
          <h3>results </h3>

          <table className="table">
            <tr>
              <th>Assignments</th>
              <th>marks</th>
            </tr>
            {results.length > 0
              ? results.map((q) => (
                  <tr>
                    <td>{q.quiz}</td>
                    <td>{q.mark}</td>
                  </tr>
                ))
              : null}
          </table>
        </section>
      </main>
    </div>
  );
}
export default Topic;
