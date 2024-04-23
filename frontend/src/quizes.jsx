import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update, result } from "./slice";
import { useParams } from "react-router-dom";
let list = [];
function checkAnswers(previousObject, updatedObject) {
  const changes = {};
  // Helper function to check if two values are equal
  function valuesAreEqual(value1, value2) {
    if (typeof value1 === "object" && typeof value2 === "object") {
      // Handle nested objects
      const keys1 = Object.keys(value1);
      const keys2 = Object.keys(value2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const key of keys1) {
        if (!valuesAreEqual(value1[key], value2[key])) {
          return false;
        }
      }
      return true;
    } else {
      return value1 === value2;
    }
  }

  // Iterate through the properties of the updatedObject
  for (const key in updatedObject) {
    if (updatedObject.hasOwnProperty(key)) {
      const previousValue = previousObject[key];
      const updatedValue = updatedObject[key];

      // Compare the values
      if (!valuesAreEqual(previousValue, updatedValue)) {
        changes[key] = "wrong";
      }
    }
  }

  return changes;
}
function Quize({ quiz, num }) {
  const specs = useParams();
  const dispatch = useDispatch();
  const grade = useSelector(({ Student }) => Student.grade);
  const admin_data = useSelector(({ Admin }) => Admin.admin_data);
  const [answer, setanswer] = useState({});
  function change(e) {
    switch (e.target.type) {
      case "text":
        setanswer((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
        break;
      case "radio":
        setanswer((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
        break;
      case "checkbox":
        if (e.target.checked) {
          list.push(e.target.value);
          setanswer((prev) => ({ ...prev, [e.target.name]: list }));
        } else {
          list = list.filter((v) => v != e.target.value);
          setanswer((prev) => ({ ...prev, [e.target.name]: list }));
        }
        break;
    }
  }
  let true_answers = {};
  quiz.map((q) => (true_answers[`q${q.id}`] = q["answer"]));
  function submit() {
    if (Object.keys(answer).length < 1) return;
    const wrong_answers = checkAnswers(answer, true_answers);
    const results = `${
      Object.keys(true_answers).length - Object.keys(wrong_answers).length
    }/${Object.keys(true_answers).length}`;
    dispatch(result({ [specs.id]: { quiz: num, mark: results } }));
    //dispatch(result({ quiz: num, mark: results }));
    let t = {
      ...admin_data,
      [specs.sbj]: {
        ...admin_data[`${specs.sbj}`],
        [grade]: {
          ...admin_data[`${specs.sbj}`][`${grade}`],
          [specs.id]: {
            ...admin_data[specs.sbj][grade][specs.id],
            [num]: [...admin_data[specs.sbj][grade][specs.id][num]],
          },
        },
      },
    };
    delete t[specs.sbj][grade][specs.id][num];
    dispatch(update(t));
  }
  return (
    <>
      <ol>
        {quiz.map((q) => (
          <li>
            {q["question"]}({Number(q.mark)}mrk{Number(q.mark) > 1 ? "s" : null}
            )
            <br />
            {q["multiple"] ? (
              q["multiple"].map((ans) => (
                <>
                  {" "}
                  <input
                    type={q["answer"].length > 1 ? "checkbox" : "radio"}
                    name={`q${q.id}`}
                    value={ans}
                    onClick={(e) => change(e)}
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
          </li>
        ))}
      </ol>
      <button className="btn finish" onClick={submit}>
        finish
      </button>
    </>
  );
}
export default Quize;
