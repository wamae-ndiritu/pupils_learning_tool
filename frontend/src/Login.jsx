import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";

const Sign_in = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  const submit = () => {
    setUser({ email: "", password: "" });
    dispatch(login({ logged: true, isadmin: false }));
    navigate("/student");
  };
  return (
    <div className="log">
      <main className="card-log">
        <h1> Welcome </h1>
        <section>
          <span>
            email
            <br />
            <input
              type="email"
              onChange={(e) =>
                setUser((p) => ({ ...p, email: e.target.value }))
              }
              value={user.email}
            />
          </span>
          <br />
          <span>
            password
            <br />
            <input
              type="password"
              onChange={(e) =>
                setUser((p) => ({ ...p, password: e.target.value }))
              }
              value={user.password}
            />
          </span>

          <button onClick={submit}>Submit</button>

          <div>
            <p>
              don't have an account?
              <span className="link" onClick={() => navigate("/Sign-up")}>
                sign-up
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Sign_in;
