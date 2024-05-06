import Navbar from '../Components/Navbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };



  return (
    <div>
      <Navbar></Navbar>
       <div className="mx-2 login row justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card right h-100">
          <div className="card-body mt-2 head">
            <h5 className="card-title fs-3">
              Enter your Email and<br /> password to login
            </h5>
            <form className="formm">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="mt-4">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control mt-2 w-60 in_email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="mt-3">
                  Password
                </label>
                <div className="d-flex loginPassword">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className={`form-control in_pass ${passwordVisible ? "password-visible" : ""
                      }`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <i
                    className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"
                      }`}
                    onClick={togglePasswordVisibility}
                    style={{ marginRight: "5px" }} // Initial margin
                  ></i>
                </div>
              </div>
              <div className="form-group form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <p className="mt-3  ms-4 privacy">
                By continuing, I agree to Stocks <span>Privacy Policy</span> and <br />
                <span>Terms of Use.</span>
              </p>

              <button type="submit" className="btn btn-primary button1">
              <Link to="/dashboard" className="btn btn-primary button10">
                Submit
              </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6 d-none d-md-block">
        <div className="text-center">
          <img
            src="/assets/desk.png"
            className="img-fluid smaller-image"
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
    </div>
   

  );
}

export default Login;
