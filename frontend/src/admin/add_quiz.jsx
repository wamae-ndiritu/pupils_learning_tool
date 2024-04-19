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
  const exist = useSelector(({ Ass }) => Ass.fornew);
  const intial = {
    subject: exist ? exist[0] : "",
    grade: exist ? exist[1] : "",
    topic: "",
    question: "",
    marks: "",
    number: Number(),
    A: "",
    B: "",
    C: "",
    D: "",
    answer: "",
  };
  const [details, chDetails] = useState(intial);
  const dispath = useDispatch();
  function add() {
    const assignment = {
      [details.subject]: {
        [details.grade]: {
          [details.topic]: {
            quiz: [],
          },
        },
      },
    };
    console.log(assignment);
  }
  let arr;
  //adds the questions on the UI
  arr = Array.from({ length: details.number }, () => (
    <>
      question:
      <textarea
        name="question"
        id=""
        cols="20"
        onChange={(e) =>
          chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      ></textarea>
      <br />
      marks:
      <input
        type="number"
        name="marks"
        onChange={(e) =>
          chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      <br />
      <p>choices:</p>
      A:
      <input
        type="text"
        name="A"
        onChange={(e) =>
          chDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      B:
      <input
        type="text"
        name="B"
        onChange={(e) =>
          chDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      C:
      <input
        type="text"
        name="C"
        onChange={(e) =>
          chDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      D:
      <input
        type="text"
        name="D"
        onChange={(e) =>
          chDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />
      <br />
      Answer:
      <input
        type="text"
        name="answer"
        onChange={(e) =>
          chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
    </>
  ));

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
