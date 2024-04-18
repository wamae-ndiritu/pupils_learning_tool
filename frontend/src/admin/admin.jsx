import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/admin/students")}>students</button>

      <section>
        <h3>my subjects</h3>
        <details>
          <summary>Kiswahili</summary>
          <h5>Topics</h5>
          <ol>
            <li>assignment1</li>
          </ol>
          <button>delete Topic</button>
        </details>
        <button>add Topic</button>
      </section>
      <section>
        <h3>my assignments</h3>
        <details>
          <summary>nomino</summary>
          <h5>assignments</h5>
          <ol>
            <li>assignment1</li>
          </ol>
          <button>delete assignment</button>
        </details>
        <button>add assignment</button>
      </section>
    </>
  );
}
export default Admin;
