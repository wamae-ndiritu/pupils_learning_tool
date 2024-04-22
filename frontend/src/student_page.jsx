import { useNavigate } from "react-router-dom";
import Navbar from "./nav";
import { useSelector } from "react-redux";
function Student() {
  const topic = useSelector(({ Admin }) => Admin.admin_data);
  const navigate = useNavigate();
  const grade = useSelector(({ Student }) => Student.grade);
  let list = {};
  Object.keys(topic).map((p) => {
    list[p] = [];
    Object.keys(topic[p][grade]).map((l) => list[p].push(l));
  });

  topic["mathematics"][
    Object.keys(topic["mathematics"]).find((p) => p == grade)
  ];
  //);
  return (
    <div className="grid">
      <Navbar />
      <main>
        <section className="card">statistics apper here</section>
        <hr />
        <section className="card students">
          <h4>available subjects</h4>
          {Object.keys(list).map((i) => (
            <details open>
              <summary>{i}</summary>
              <ol>
                {Object.values(list[i]).map((j) => (
                  <li
                    className="topic"
                    onClick={() => navigate(`/student/${i}/${j}`)}
                  >
                    {j}
                  </li>
                ))}
              </ol>
            </details>
          ))}
        </section>{" "}
      </main>
    </div>
  );
}
export default Student;
