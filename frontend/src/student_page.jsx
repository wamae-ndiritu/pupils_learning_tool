import { subject, topics } from "./Mock_data";
import { useNavigate } from "react-router-dom";
function Student() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="card">statistics apper here</section>
      <hr />
      <section className="card students">
        <h4>available subjects</h4>
        {Object.keys(topics).map((i) => (
          <details>
            <summary>{i}</summary>
            <ol>
              {Object.values(topics[i]).map((j) => (
                <li className="topic" onClick={() => navigate(`/student/${j}`)}>
                  {j}
                </li>
              ))}
            </ol>
          </details>
        ))}
      </section>{" "}
    </main>
  );
}
export default Student;
