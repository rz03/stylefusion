import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div>
      <div id="heading">
        <h2>Create account</h2>
      </div>
      <div id="register">
        <div className="register" style={{ alignItems: "flex-start" }}>
          <label htmlFor="title">Title</label>
          <br />
          <select name="title" id="title">
            <option value="">Choose a title</option>
            <option value="MR">Mr.</option>
            <option value="MRS">Mrs.</option>
            <option value="MS">Ms.</option>
            <option value="MISS">Miss</option>
            <option value="MX">Mx.</option>
            <option value="DOCTOR">Doctor</option>
            <option value="OTHER">Other</option>
          </select>
          <br />
          <label htmlFor="first-name">First name</label>
          <br />
          <input type="text" id="first-name" name="first-name" required />
          <br />
          <label htmlFor="last-name">Last name</label>
          <br />
          <input type="text" id="last-name" name="last-name" />
          <br />
          <label htmlFor="email">Email Address (required)</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          {/* <p>
            Your password should be at least 8 characters in length, and contain
            at least 1 number and 1 letter
          </p> */}
          <input
            type="password"
            id="password"
            name="password"
            minlength="8"
            required
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="tel" id="phone" name="phone" required />
          <br />
          <p>
            We'll only use this to contact you about your order or to send you
            SMS about your delivery
          </p>
          {/* <p>
            By creating an account with Charles Tyrwhitt, you confirm that you
            have read and accept our <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p> */}
          <br />
          <button id="create-account">CREATE AN ACCOUNT</button>
        </div>
        <div className="login">
          <h3 style={{ paddingBottom: "20px" }}>HAVE AN ACCOUNT?</h3>
          <button id="login-btn">CLICK HERE TO LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
