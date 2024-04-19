import { useParams } from "react-router-dom";
import Quize from "./quizes";
import Navbar from "./nav";
import { topic } from "./Mock_data";
function Topic() {
  const subject = useParams().sbj;
  const assignment = topic[Object.keys(topic).find((t) => t == subject)];
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
