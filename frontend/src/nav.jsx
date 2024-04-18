import { useNavigate } from "react-router-dom";

function Navbar(params) {
  const Navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => Navigate("/admin")}>admin</button>

      <button onClick={() => Navigate("/sign-in")}>signin</button>
      <button onClick={() => Navigate("/student")}>student</button>
    </nav>
  );
}
export default Navbar;
