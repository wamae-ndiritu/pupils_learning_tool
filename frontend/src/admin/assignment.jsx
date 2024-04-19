import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./nav";
import { admin_data } from "../Mock_data";
import { useDispatch } from "react-redux";
import { fornew } from "../slice";
function Ass() {
  const grade = useParams();
  const dispath = useDispatch();
  const navigate = useNavigate();
  let locol = admin_data[`${grade.sbj}`];
  locol = locol[`${grade.grade}`];
  function add() {
    dispath(fornew([grade.sbj, grade.grade]));
    navigate("/admin/new-assignment");
  }
  return (
    <div className="grid">
      <Navbar />
      <main>
        <section className="card ass">
          <h3>Topics</h3>
          {Object.keys(locol).map((topic) => (
            <details>
              <summary>{topic}</summary>
              {Object.keys(locol[`${topic}`]).map((ass) => (
                <div>
                  <h5>{ass}</h5>
                  <ol>
                    {locol[`${topic}`][`${ass}`].map((q) => (
                      <li>
                        {q["question"]}({q.mark}mrk{q.mark > 1 ? "s" : null})
                        <br />
                        {q["multiple"] ? (
                          q["multiple"].map((ans) => (
                            <>
                              {" "}
                              <input
                                type={
                                  typeof q["answer"] == "string"
                                    ? "radio"
                                    : "checkbox"
                                }
                              />
                              {ans}
                            </>
                          ))
                        ) : (
                          <input
                            type="text"
                            name={`q${q.id}`}
                            onChange={(e) => change(e)}
                          />
                        )}
                        <p>answer = {`[${q.answer}]`}</p>
                      </li>
                    ))}
                  </ol>
                  <button className="btn">edit quize</button>
                  <button className="btn-cancel">delete quize</button>
                </div>
              ))}
            </details>
          ))}
          <button className="btn" onClick={add}>
            add quize
          </button>
          <button className="btn-cancel">delete grade</button>
        </section>
      </main>
    </div>
  );
}
export default Ass;
