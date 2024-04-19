import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign_in = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const submit = () => {
    setUser({ email: "", password: "" });
    navigate("/student");
  };
  return (
    <div className="grid grid2">
      <img src="" alt="logo" />
      <main className="card card-h">
        <h1>log-in</h1>
        <section>
          <span>
            email:
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
            password:
            <input
              type="password"
              onChange={(e) =>
                setUser((p) => ({ ...p, password: e.target.value }))
              }
              value={user.password}
            />
          </span>
        </section>
        <section>
          <button className="btn" onClick={submit}>
            log-in
          </button>
        </section>
        <div>
          <p>
            don't have an account?
            <span className="link" onClick={() => navigate("/Sign-up")}>
              sign-up
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};
export default Sign_in;
