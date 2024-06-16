import { useContext } from "react";
import { AuthContext } from "../ProviderContext/ProviderContext";
import { Link } from "react-router-dom";

const Register = () => {
  const {CreateUser,loader}=useContext(AuthContext)
  if (loader) {
    return (
      <div className="max-w-3xl mx-auto text-center border rounded shadow-lg">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const handlerRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password,name);
    //create user
    CreateUser(email,password)
    .then(res=>console.log(res.user))
    .catch(error=>console.log(error.message))

  }
    return (
      <div className="max-w-5xl mx-auto">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handlerRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>
                  Already Registered ? please{" "}
                  <button className="link btn btn-square">
                    <Link to={"/login"}>Login</Link>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;