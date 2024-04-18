import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/admin/students")}>students</button>

      <br />
      <section className="card ass">
        <h3>my subjects</h3>
        <div>
          <h5>kiswahili</h5>
          <ol>
            <li className="link-b" onClick={() => navigate("/admin/kiswahili")}>
              grade4
            </li>
            <li className="link-b" onClick={() => navigate("/admin/math")}>
              grade6
            </li>
          </ol>
          <button className="btn-cancel">delete subject</button>
        </div>
        <button className="btn">add subject</button>
      </section>
      <br />
    </>
  );
}
export default Admin;
