const Signup = () => {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col mx-auto h1 text-center mb-3 text-primary fw-bold">
            Create New Customer Account
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-7 col-sm-9 col-12 mx-auto bg-light">
            <form>
              <div className="mb-3">Personal Information</div>
              <div className="mb-3">
                <label className="form-label">
                  First Name:
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    required
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Last Name:
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input"/>
                  <label className="form-label">Sign up for Newsletter</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input"/>
                  <label className="form-label">
                    Allow remote shopping assistance
                  </label>
              </div>

              <div className="mb-3">Sign-in Information</div>
              <div className="mb-3">
                <label className="form-label">
                  Email:
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    required
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password:
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    required
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Confirm Password:
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-type Password"
                    required
                  />
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-label">Show Password</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
