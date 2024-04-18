import { useParams } from "react-router-dom";
import Quize from "../quizes";
function Ass() {
  const grade = useParams().sbj;
  return (
    <main>
      <section className="card ass">
        <h3>Topics</h3>

        <details>
          <summary>nomino</summary>
          <div>
            <h5>ass1</h5>
            <Quize />
            <button className="btn">edit quize</button>
            <button className="btn-cancel">delete quize</button>
          </div>
          <div>
            <h5>ass2</h5>
            <Quize />
            <button className="btn">edit quize</button>
            <button className="btn-cancel">delete quize</button>
          </div>
        </details>
        <details>
          <summary>ngeli</summary>
          <div>
            <h5>ass1</h5>
            <Quize />
            <button className="btn">edit quize</button>
            <button className="btn-cancel">delete quize</button>
          </div>
          <div>
            <h5>ass2</h5>
            <Quize />
            <button className="btn">edit quize</button>
            <button className="btn-cancel">delete quize</button>
          </div>
        </details>
        <button className="btn">add quize</button>
      </section>
    </main>
  );
}
export default Ass;
