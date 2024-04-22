import { useState } from "react";
import { useDispatch } from "react-redux";
import { result } from "./slice";
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
  const [answer, setanswer] = useState({});
  const dispatch = useDispatch();
  function change(e) {
    switch (e.target.type) {
      case "text":
        setanswer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        break;
      case "radio":
        setanswer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    dispatch(result({ quiz: num, mark: results }));
  }
  return (
    <>
      <ol>
        {quiz.map((q) => (
          <li>
            {q["question"]}({q.mark}mrk{q.mark > 1 ? "s" : null})
            <br />
            {q["multiple"] ? (
              q["multiple"].map((ans) => (
                <>
                  {" "}
                  <input
                    type={typeof q["answer"] == "string" ? "radio" : "checkbox"}
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
