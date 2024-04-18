import { useParams } from "react-router-dom";
import Quize from "./quizes";
import Navbar from "./nav";
function Topic() {
  const subject = useParams().sbj;
  const _topics = ["ass1", "ass2", "ass3"];
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
          {_topics.map((i) => (
            <details>
              <summary>{i}</summary>
              <Quize />
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
