import { useNavigate } from "react-router-dom";

function Navbar(params) {
  const Navigate = useNavigate();
  return (
    <nav className="card inlinegrid">
      <figure>
        <img src="" alt="page icon" />
        <p>pupil learning tool</p>
      </figure>

      <div className="link-b" onClick={() => Navigate("/student")}>
        dashboard
      </div>

      <div className="link-b" onClick={() => Navigate("/sign-in")}>
        logout
      </div>
    </nav>
  );
}
export default Navbar;
