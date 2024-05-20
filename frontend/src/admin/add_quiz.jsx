import { useEffect, useState } from "react";
import Navbar from "../nav";
import { useDispatch, useSelector } from "react-redux";
import { newass } from "../slice";
import { useNavigate } from "react-router-dom";

function Quize(present) {
  /*structureof data required {
    Subject: {
      Grade: {
        Topic: {
          assignment: ["questions...",
            {id: Number(),question: "", mark: Number(),multiple: "depends",
              answer: "",},],},
      },},};*/
  const admin = useSelector(({ Admin }) => Admin);
  const navigate = useNavigate();
  const exist = admin.fornew;
  const data = admin.edit;
  const dispatch = useDispatch();
  const intial = {
    subject: exist ? exist[0] : data?.subject,
    Grade: exist ? exist[1] : data?.grade,
    topic: data?.topic,
    number: data?.quiz[1].length || 0,
    quize: data?.quiz[1] || [],
  };
  const [details, chDetails] = useState(intial);
  let intmul = {};
  intial.quize.map((v) => {
    intmul[v.id] = v.multiple
      ? {
          A: v.multiple[0],
          B: v.multiple[1],
          C: v.multiple[2],
          D: v.multiple[3],
        }
      : null;
    Object.keys(intmul).map((l) => intmul[l] || delete intmul[l]);
  });
  const [mult, chmult] = useState(intmul || {});
  function add() {
    console.log(details.quize);
    switch (true) {
      case details.subject == undefined:
        alert("add subject");
        break;
      case details.Grade == undefined:
        alert("add Grade");
        break;
      case details.topic == undefined:
        alert("add Topic");
        break;
      case details.quize.length <= 0:
        alert("add questions");
        break;

      case true:
        let u = {};
        //sets the question number
        let q =
          admin.admin_data[details.subject] &&
          admin.admin_data[details.subject][details.Grade] &&
          admin.admin_data[details.subject][details.Grade][details.topic] &&
          Object.keys(
            admin.admin_data[details.subject][details.Grade][details.topic]
          ).length + 1;
        q = data?.quiz[0] || `quize${q || 1}`;
        console.log(q);
        //creates the data to be addwd
        let assignment = {
          [details.subject]: {
            [details.Grade]: {
              [details.topic]: {
                [q]: [],
              },
            },
          },
        };
        //puts multiple amswers to one array
        Object.keys(mult).forEach((p) => {
          p = Number(p);
          u[p] = Object.values(mult[p]).filter((b) => b !== "");
        });
        //adds all the question to the data tobe addedd
        details.quize.forEach((val) => {
          assignment[details.subject][details.Grade][details.topic][q].push({
            ...val,
            multiple: u[val.id],
          });
        });

        //checks for multiple answers
        assignment[details.subject][details.Grade][details.topic][q].forEach(
          (p) => {
            typeof p.answer == "string"
              ? (p.answer = p.answer?.replace(/\s/g, "").split("&"))
              : null;
          }
        );
        dispatch(
          newass({
            assignment,
            val: [details.subject, details.Grade, details.topic],
            present: admin.admin_data,
            l: q,
          })
        );
        dispatch(newass(undefined));
        navigate(`/admin/${details.subject}/${details.Grade}`);
    }
  }
  function change(e, id) {
    //console.log(details.quize[id - 1]?.answer?.split("&"));
    chDetails((prev) => {
      const find = prev.quize.findIndex((item) => item.id == id);
      const ids = id - 1;
      if (find !== -1) {
        return {
          ...prev,
          quize: prev.quize.map((item, ind) =>
            ind === find ? { ...item, [e.target.name]: e.target.value } : item
          ),
        };
      } else {
        return {
          ...prev,
          quize: [...prev.quize, { id: id, [e.target.name]: e.target.value }],
        };
      }
    });
  }
  //adds the questions on the UI
  let arr = [];
  for (let i = 0; i < details.number; i++) {
    let id = i + 1;
    arr.push(
      <>
        {intial.quize.length > 0 ? (
          details.quize.map(
            (p) =>
              p.id == id && (
                <>
                  question{id}:
                  <textarea
                    name="question"
                    cols="20"
                    value={details.quize[i]["question"]}
                    onChange={(e) => change(e, id)}
                  ></textarea>
                  <br />
                  marks:
                  <input
                    type="number"
                    name="mark"
                    value={details.quize[i]["mark"]}
                    onChange={(e) => change(e, id)}
                  />
                  <br />
                  <p>choices:</p>
                  A:
                  <input
                    type="text"
                    name="A"
                    value={(mult[id] && mult[id]["A"]) || undefined}
                    onChange={(e) =>
                      chmult((prev) => ({
                        ...prev,
                        [`${id}`]: {
                          ...prev[`${id}`],
                          [e.target.name]: e.target.value,
                        },
                      }))
                    }
                  />
                  B:
                  <input
                    type="text"
                    name="B"
                    value={(mult[id] && mult[id]["B"]) || undefined}
                    onChange={(e) =>
                      chmult((prev) => ({
                        ...prev,
                        [`${id}`]: {
                          ...prev[`${id}`],
                          [e.target.name]: e.target.value,
                        },
                      }))
                    }
                  />
                  C:
                  <input
                    type="text"
                    name="C"
                    value={(mult[id] && mult[id]["C"]) || undefined}
                    onChange={(e) =>
                      chmult((prev) => ({
                        ...prev,
                        [`${id}`]: {
                          ...prev[`${id}`],
                          [e.target.name]: e.target.value,
                        },
                      }))
                    }
                  />
                  D:
                  <input
                    type="text"
                    name="D"
                    value={(mult[id] && mult[id]["D"]) || undefined}
                    onChange={(e) =>
                      chmult((prev) => ({
                        ...prev,
                        [`${id}`]: {
                          ...prev[`${id}`],
                          [e.target.name]: e.target.value,
                        },
                      }))
                    }
                  />
                  <br />
                  Answer:
                  <input
                    type="text"
                    name="answer"
                    value={details.quize[i]["answer"]}
                    onChange={(e) => change(e, id)}
                  />
                  <br />
                  <hr />
                </>
              )
          )
        ) : (
          <>
            question{id}:
            <textarea
              name="question"
              cols="20"
              onChange={(e) => change(e, id)}
            ></textarea>
            <br />
            marks:
            <input type="number" name="marks" onChange={(e) => change(e, id)} />
            <br />
            <p>choices:</p>
            A:
            <input
              type="text"
              name="A"
              onChange={(e) =>
                chmult((prev) => ({
                  ...prev,
                  [`${i}`]: {
                    ...prev[`${i}`],
                    [e.target.name]: e.target.value,
                  },
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
                  [`${i}`]: {
                    ...prev[`${i}`],
                    [e.target.name]: e.target.value,
                  },
                }))
              }
            />
            C:
            <input
              type="text"
              name="C"
              //value={mult[i]["C"]}
              onChange={(e) =>
                chmult((prev) => ({
                  ...prev,
                  [`${i}`]: {
                    ...prev[`${i}`],
                    [e.target.name]: e.target.value,
                  },
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
                  [`${i}`]: {
                    ...prev[`${i}`],
                    [e.target.name]: e.target.value,
                  },
                }))
              }
            />
            <br />
            Answer:
            <input type="text" name="answer" onChange={(e) => change(e, id)} />
            <br />
            <hr />
          </>
        )}
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
          name="Grade"
          value={details.Grade}
          onChange={(e) =>
            chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <br />
        Topic:
        <input
          type="text"
          name="topic"
          value={details.topic}
          onChange={(e) =>
            chDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <br />
        How many Questions{" "}
        <input
          type="number"
          name="number"
          value={details.number}
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
