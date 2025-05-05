// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./register.css";


// const Register = () => {
//     const [inputs, setInputs] = useState({
//       username: "",
//       email: "",
//       password: "",
//       name: "",
//     });
  
//     const handleChange = (e) => {
//       setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };
  
//     return (
//       <div className="register">
//         <div className="card">
//           <div className="left">
//             <h1>lOOp</h1>
//             <p>
              
//             </p>
//             <span>Do you have an account?</span>
//             <Link to="/login">
//               <button>Login</button>
//             </Link>
//           </div>
//           <div className="right">
//             <h1>Register</h1>
//             <form>
//               <input
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 onChange={handleChange}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 onChange={handleChange}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 placeholder="Name"
//                 name="name"
//                 onChange={handleChange}
//               />
//               <button type="submit">Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Register;
  

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./register.css";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate(); // ✅ call useNavigate at the top level

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setErr(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>loop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
           {err && <span>{typeof err === "string" ? err : "Registration failed. Try again."}</span>}

            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
