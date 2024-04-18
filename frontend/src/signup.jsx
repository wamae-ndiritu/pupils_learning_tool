import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sign_up = () => {
  const navigate = useNavigate();
  const initial = { email: "", password: "", name: "" };
  const [user, setUser] = useState(initial);
  const submit = () => {
    setUser(initial);
    navigate("/");
  };
  return (
    <div className="card">
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
        password:
        <input
          type="password"
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
          value={user.password}
        />
      </span>
      <div>
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
    </div>
  );
};
export default Sign_up;
