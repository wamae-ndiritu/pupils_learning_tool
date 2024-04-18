import { students } from "../Mock_data";
function Stats() {
  return (
    <main className="card">
      <h3> students</h3>
      {Object.keys(students).map((grade) => (
        <>
          <table className="table">
            <tr>
              <th colSpan="5">{grade ? grade : "grade"}</th>
            </tr>
            <tr>
              <th>name</th>
              <th>subject</th>
              <th>score</th>
              <th colSpan="2">action</th>
            </tr>

            {Object.values(students[grade]).map((val) => (
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
      ))}
    </main>
  );
}
export default Stats;
