import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fornew, update, edit } from "../slice";
import Navbar from "../nav";

function Ass() {
  const grade = useParams();
  const dispath = useDispatch();
  const navigate = useNavigate();
  const admin_data = useSelector(({ Admin }) => Admin.admin_data);
  let locol = admin_data[`${grade.sbj}`];
  locol = locol[`${grade.grade}`];
  function add() {
    dispath(fornew([grade.sbj, grade.grade]));
    navigate("/admin/new-assignment");
  }
  function ed(top, q) {
    const data = {
      subject: grade.sbj,
      grade: grade.grade,
      topic: top,
      quiz: [q, locol[top][q]],
    };
    dispath(edit(data));
    navigate("/admin/new-assignment");
  }
  function del() {
    let t = {
      ...admin_data,
      [grade.sbj]: { ...admin_data[`${grade.sbj}`] },
    };
    delete t[`${grade.sbj}`][`${grade.grade}`];
    dispath(update(t));
    navigate("/admin");
  }

  function delq(topic, quiz) {
    let t = {
      ...admin_data,
      [grade.sbj]: {
        ...admin_data[`${grade.sbj}`],
        [grade.grade]: {
          ...admin_data[`${grade.sbj}`][`${grade.grade}`],
          [`${topic}`]: {
            ...admin_data[`${grade.sbj}`][`${grade.grade}`][`${topic}`],
            [`${quiz}`]: [
              ...admin_data[`${grade.sbj}`][`${grade.grade}`][`${topic}`][
                `${quiz}`
              ],
            ],
          },
        },
      },
    };
    delete t[`${grade.sbj}`][`${grade.grade}`][`${topic}`][`${quiz}`];
    dispath(update(t));
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
                                  q["answer"].length > 1 ? "checkbox" : "radio"
                                }
                              />
                              {ans}
                            </>
                          ))
                        ) : (
                          <input type="text" name={`q${q.id}`} />
                        )}
                        <p>answer = {`[${q.answer}]`}</p>
                      </li>
                    ))}
                  </ol>
                  <button className="btn" onClick={() => ed(topic, ass)}>
                    edit quize
                  </button>
                  <button
                    className="btn-cancel"
                    onClick={() => delq(topic, ass)}
                  >
                    delete quize
                  </button>
                </div>
              ))}
            </details>
          ))}
          <button className="btn" onClick={add}>
            add quize
          </button>
          <button className="btn-cancel" onClick={del}>
            delete grade
          </button>
        </section>
      </main>
    </div>
  );
}
export default Ass;
