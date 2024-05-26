import { useState } from "react";
import { students } from "../Mock_data";
import Navbar from "../nav";
function Stats() {
  const [grad_e, chgrad_e] = useState("grade");
  const [Students, chStudents] = useState(students);
  function del(item) {
    let s = Students[grad_e].filter((v) => v.id != item.id);
    chStudents((v) => ({ ...v, [grad_e]: s }));
  }
  return (
    <div className="grid">
      <Navbar />
      <main className="card ">
        <h3> Students</h3>
        <select onChange={(e) => chgrad_e(e.target.value)}>
          <option hidden>grade</option>
          {Object.keys(Students).map((grade) => (
            <option>{grade}</option>
          ))}
        </select>

        <>
          <table className="table">
            <tr>
              <th colSpan="6">{grad_e}</th>
            </tr>
            <tr>
              <th></th>
              <th>name</th>
              <th>subject</th>
              <th>score</th>
              <th colSpan="2">action</th>
            </tr>
            {grad_e == "grade"
              ? null
              : Object.values(Students[grad_e]).map((val) => (
                  <tr>
                    {Object.values(val).map((valu) => (
                      <td className="item">{valu}</td>
                    ))}
                    <td>edit</td>
                    <td onClick={() => del(val)}>delete</td>
                  </tr>
                ))}
          </table>
          <br />
        </>
      </main>
    </div>
  );
}
export default Stats;
