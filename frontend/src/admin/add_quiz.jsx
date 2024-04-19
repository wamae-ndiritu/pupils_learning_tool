import { useEffect, useState } from "react";
import Navbar from "./nav";
import { useDispatch, useSelector } from "react-redux";

function Quize() {
  /*const structure = {
    Subject: {
      Grade: {
        Topic: {
          assignment: ["questions...",
            {id: Number(),question: "", mark: Number(),multiple: "depends",
              answer: "",},],},
      },},};*/
  const admin = useSelector(({ Admin }) => Admin);
  const exist = admin.fornew;
  const dispatch = useDispatch();
  const intial = {
    subject: exist ? exist[0] : "",
    grade: exist ? exist[1] : "",
    topic: "",
    number: 0,
    quize: [],
  };
  const [details, chDetails] = useState(intial);
  const [mult, chmult] = useState([]);

  const dispath = useDispatch();
  const ids = Array.from({ length: details.number }, () => "id");
  function add() {
    console.log(details);
    console.log(mult);
    let q = Object.keys(
      admin.admin_data[`${details.subject}`][`${details.grade}`][
        `${details.topic}`
      ] || 1
    )?.length;

    let quize = { ...details };
    delete quize["subject"];
    delete quize["topic"];
    delete quize["grade"];
    delete quize["number"];
    //console.log(quize);
    const assignment = {
      [details.subject]: {
        [details.grade]: {
          [details.topic]: {
            [`quiz${q + 1}`]: [{ ...details }],
          },
        },
      },
    };
    //console.log(assignment);
  }
  function change(e, id) {
    console.log(details.quize);
    let q = details.quize.map((it) => ({
      ...it,
      id: 1,
      [e.target.name]: e.target.value,
    }));
    chDetails((prev) => ({ ...prev, quize: [...prev.quize, q] }));
    console.log(q);
  }
  //adds the questions on the UI
  let arr = [];
  for (let i = 0; i < details.number; i++) {
    let id = i + 1;
    arr.push(
      <>
        question{id}:
        <textarea
          name="question"
          cols="20"
          onClick={(e) =>
            chDetails((prev) => ({
              ...prev,
              quize: [...prev.quize, { id: id }],
            }))
          }
          onChange={(e) =>
            chDetails((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        ></textarea>
        <br />
        marks:
        <input
          type="number"
          name="marks"
          onChange={(e) =>
            chDetails((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        />
        <br />
        <p>choices:</p>
        A:
        <input
          type="text"
          name="A"
          onClick={(e) => chmult((prev) => ({ id: id }))}
          onChange={(e) =>
            chmult((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        />
        B:
        <input
          type="text"
          name="B"
          onChange={(e) =>
            chmult((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        />
        C:
        <input
          type="text"
          name="C"
          onChange={(e) =>
            chmult((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        />
        D:
        <input
          type="text"
          name="D"
          onChange={(e) =>
            chmult((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        />
        <br />
        Answer:
        <input
          type="text"
          name="answer"
          onChange={(e) =>
            chDetails((prev) => ({
              ...prev,
              quize: prev.quize.map((ite, ind) =>
                ind == i ? { ...ite, [e.target.name]: e.target.value } : ite
              ),
            }))
          }
        />
        <br />
        <hr />
      </>
    );
  }

  return (
    <div className="grid">
      <Navbar />
      <main className="card ass">
        <h1>new assignment</h1>
        Subject:{" "}
        <input
          type="text"
          name="subject"
          value={details.subject}
          onChange={(e) =>
            chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <br />
        Grade:
        <input
          type="text"
          name="grade"
          value={details.grade}
          onChange={(e) =>
            chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <br />
        Topic:
        <input
          type="text"
          name="topic"
          onChange={(e) =>
            chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <br />
        How many Questions{" "}
        <input
          type="number"
          name="number"
          id=""
          onChange={(e) =>
            chDetails((prev) => ({
              ...prev,
              [e.target.name]: Number(e.target.value),
            }))
          }
        />
        <br />
        {arr}
        <br />
        <button className="btn" onClick={add}>
          Add
        </button>
      </main>
    </div>
  );
}
export default Quize;
