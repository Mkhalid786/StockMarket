import NavbarUser from "../Components/NavbarUser";
import { Link } from "react-router-dom";
import NavbarrDashTwo from "../Components/UserNavbar/NavbarrDashTwo";

function Userinterface(){
    
    return(
        <div className="userr">
      <NavbarUser></NavbarUser>
      <NavbarrDashTwo></NavbarrDashTwo>
      {/* <div className="hao">
      <div
        class="side-navbar active-nav d-flex abcc  justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul class="nav flex-column text-white w-100">
          <a href="#" class="nav-link h3 text-white my-2">
            Responsive
          </a>
          <li href="#" class="nav-link">
            <i class="bx bxs-dashboard"></i>
            <span class="mx-2">Explore</span>
          </li>
          <li href="#" class="nav-link">
            <i class="bx bx-user-check"></i>
            <span class="mx-2">Holdings</span>
          </li>
          <li href="#" class="nav-link">
            <i class="bx bx-conversation"></i>
            <span class="mx-2">My Watchlist</span>
          </li>
        </ul>

        <span href="#" class="nav-link h4 w-100 mb-5">
          <a href="">
            <i class="bx bxl-instagram-alt text-white"></i>
          </a>
          <a href="">
            <i class="bx bxl-twitter px-2 text-white"></i>
          </a>
          <a href="">
            <i class="bx bxl-facebook text-white"></i>
          </a>
        </span>
      </div>

      <div classn="p-1 my-container active-cont">
        <nav class="navbar top-navbar navbar-light  abc px-5">
          <a class="btn bbtt border-0" id="menu-btn">
            <i class="bx bx-menu">
              <button
                className="navbar-toggler bbtt"
                type="button"
                data-bs-toggle="collapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </i>
          </a>
        </nav>
      </div>
      </div> */}

      <div className="container-fluid  count pt-3">
        <div className="row gap-4">
          <div className="col-3 bg-white custom-div">
            {/* there are three button */}

            <div class="d-flex flex-column btnm align-items-center">
              <button type="button" class="btn btn-primary bot btn1 ">
                <Link to="/dashboard">Explore</Link>
              </button>
              <button type="button" class="btn btn-primary bot btn2 ">
                Holdings
              </button>
              <button type="button" class="btn btn-primary bot btn3 ">
                <Link to="/Watchlist">My Watchlist</Link>
              </button>
            </div>
          </div>
          <div className=" col-9 ">
            <div className="container  cat_area ">
              <div className="row item">
                <div className="col-6 col-lg-3 text-center mb-3">
                  <div className="cont">
                    <h4 class="font-bold fs-5 mt-2">SENSEX</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center mb-3">
                  <div className="cont">
                    <h4 class="font-bold fs-5 mt-2">BANK NIFTY</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center mb-3">
                  <div className="cont">
                    <h4 class="font-bold fs-5 mt-2">FINNIFTY</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center mb-3">
                  <div className="cont">
                    <h4 class="font-bold fs-5 mt-2">All Indices</h4>
                    <p>Indian and Global</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid ">
              <div className="row bg-white mt-1 hold01"> 
              <div className="col holding_area">
              <img src="/assets/Stock.jpg" alt="" className="stockimg"></img>
              <h5 className="mt-2 hhold fs-4">You have no holding</h5>
              <p>Make your next investment</p>
              <div><p className="fs-5">Price will be live after stocks account is active .</p></div>

              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    );
}


export default Userinterface;