const Signup = () => {
  return (
    <div className="container mt-5 bg-info">
      <form>
        <div className="mb-3">
          <label className="form-label">
            Your Name:
            <input type="text" className="form-control"/>
          </label>
        </div>
        <div className="mb-3"> 
          <label className="form-label">
            Email:
            <input type="email" className="form-control"/>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password:
            <input type="password" className="form-control"/>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Confirm Password:
            <input type="password" className="form-control"/>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
