import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./slice";
const Sign_up = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initial = {
    email: "",
    password: "",
    grade: "",
    name: "",
    isadmin: false,
  };
  const [user, setUser] = useState(initial);
  let temp = [];
  for (let i = 1; i <= 12; i++) {
    temp.push(`Grade${i}`);
  }
  const submit = () => {
    dispatch(login({ logged: true, isadmin: user.isadmin }));
    user.isadmin ? navigate("/admin") : navigate("/student");
  };
  return (
    <div className="log">
      <main className="card-log">
        <h1> sign-up </h1>
        <section>
          <span>
            full name
            <br />
            <input
              type="text"
              onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
              value={user.name}
            />
          </span>
          <br />
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
            current Grade
            <br />
            <select
              onChange={(e) =>
                setUser((p) => ({ ...p, grade: e.target.value }))
              }
            >
              <option hidden>--Select your Grade--</option>
              {temp.map((p) => (
                <>
                  <option>{p}</option>
                </>
              ))}
            </select>
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
          <div>
            <input
              type="checkbox"
              value={user.isadmin}
              onClick={(e) => setUser((p) => ({ ...p, isadmin: !p.isadmin }))}
            />{" "}
            teacher
            <br />
          </div>
          <button onClick={submit}>Submit</button>
          <p>
            already have an account?
            <span className="link" onClick={() => navigate("/Sign-in")}>
              sign-in
            </span>
          </p>
        </section>
      </main>
    </div>
  );
};
export default Sign_up;
