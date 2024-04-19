import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sign_up = () => {
  const navigate = useNavigate();
  const initial = { email: "", password: "", grade: "", name: "" };
  const [user, setUser] = useState(initial);
  const submit = () => {
    setUser(initial);
    navigate("/admin");
  };
  return (
    <div className="grid grid2">
      <img src="" alt="logo" />
      <main className="card card-h">
        <h1> sign-up </h1>
        <span>
          user name:
          <input
            type="text"
            onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
            value={user.name}
          />
        </span>
        <br />
        <span>
          email:
          <input
            type="email"
            onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
            value={user.email}
          />
        </span>
        <br />
        <span>
          Grade:
          <input
            type="text"
            onChange={(e) => setUser((p) => ({ ...p, grade: e.target.value }))}
            value={user.grade}
          />
        </span>
        <br />
        <span>
          password:
          <input
            type="password"
            onChange={(e) =>
              setUser((p) => ({ ...p, password: e.target.value }))
            }
            value={user.password}
          />
        </span>
        <div>
          <input type="checkbox" /> teacher
          <br />
          <button className="btn" onClick={submit}>
            sign-up
          </button>
        </div>
        <p>
          already have an account?
          <span className="link" onClick={() => navigate("/Sign-in")}>
            sign-in
          </span>
        </p>
      </main>
    </div>
  );
};
export default Sign_up;
