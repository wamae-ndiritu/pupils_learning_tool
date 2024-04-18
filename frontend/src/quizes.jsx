import { useParams } from "react-router-dom";

function Quize() {
  return (
    <>
      <ol>
        <li>
          what is the Name
          <br />
          <input type="radio" name="q1" id="" />
          john
          <input type="radio" name="q1" id="" />
          mark
          <input type="radio" name="q1" id="" />
          matthew
          <input type="radio" name="q1" id="" />
          bill
        </li>
        <li>
          what is the Name
          <br />
          <input type="radio" name="q4" id="" />
          john
          <input type="radio" name="q4" id="" />
          mark
          <input type="radio" name="q4" id="" />
          matthew
          <input type="radio" name="q4" id="" />
          bill
        </li>
        <li>
          what is the Name
          <br />
          <input type="radio" name="q2" id="" />
          john
          <input type="radio" name="q2" id="" />
          mark
          <input type="radio" name="q2" id="" />
          matthew
          <input type="radio" name="q2" id="" />
          bill
        </li>
        <li>
          what is the Name
          <br />
          <input type="radio" name="q3" id="" />
          john
          <input type="radio" name="q3" id="" />
          mark
          <input type="radio" name="q3" id="" />
          matthew
          <input type="radio" name="q3" id="" />
          bill
        </li>
      </ol>
      {/*<button className="btn finish">finish</button>*/}
    </>
  );
}
export default Quize;
