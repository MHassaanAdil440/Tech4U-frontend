import React from 'react';

const Login = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col mx-auto h1 text-center mb-3 text-primary fw-bold">
          Welcome Back! Login to Your Account
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-7 col-sm-9 col-12 mx-auto bg-light">
          <form>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email:
                <input
                  type="email"
                  id="loginEmail"
                  className="form-control"
                  placeholder="Enter Email"
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password:
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  placeholder="Enter Password"
                  autoComplete="off"
                  required
                />
              </label>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-label">Show Password</label>
              </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
