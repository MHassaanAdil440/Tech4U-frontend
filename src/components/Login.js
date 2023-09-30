const Login = () => {
    return(
        <div className="container mt-5 bg-success">
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        Enter Email:
                        <input type="email" className="form-control"/>
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Enter Password:
                        <input type="password" className="form-control"/>
                    </label>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
export default Login;