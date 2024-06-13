import React from 'react';
import './SignupPage.css'; // Import your CSS file

const SignupPage = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
