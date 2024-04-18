import { useState } from "react";
import { students } from "../Mock_data";
function Stats() {
  const [grad_e, chgrad_e] = useState("grade");
  return (
    <main className="card ">
      <h3> students</h3>
      <select onChange={(e) => chgrad_e(e.target.value)}>
        <option disable hidden>
          grade
        </option>
        {Object.keys(students).map((grade) => (
          <option>{grade}</option>
        ))}
      </select>

      <>
        <table className="table">
          <tr>
            <th colSpan="5">{grad_e}</th>
          </tr>
          <tr>
            <th>name</th>
            <th>subject</th>
            <th>score</th>
            <th colSpan="2">action</th>
          </tr>

          {grad_e == "grade"
            ? null
            : Object.values(students[grad_e]).map((val) => (
                <tr>
                  {Object.values(val).map((valu) => (
                    <td className="item">{valu}</td>
                  ))}
                  <td>delete</td>
                  <td>edit</td>
                </tr>
              ))}
        </table>
        <br />
      </>
    </main>
  );
}
export default Stats;
