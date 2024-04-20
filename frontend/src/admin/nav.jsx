import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slice";

function Navbar(params) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <nav className="card inlinegrid">
      <figure>
        <img src="" alt="page icon" />
        <p>pupil learning tool</p>
      </figure>
      <div className="link-b" onClick={() => Navigate("/admin")}>
        dashboard
      </div>

      <div className="link-b" onClick={() => Navigate("/admin/students")}>
        student list
      </div>
      <div className="link-b" onClick={() => Navigate("/admin/new-assignment")}>
        newassignment
      </div>
      <div className="link-b" onClick={() => dispatch(logout())}>
        logout
      </div>
    </nav>
  );
}
export default Navbar;
