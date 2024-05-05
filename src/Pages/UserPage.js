import NavbarUser from "../Components/NavbarUser";
import Sidebar from "../Sidebar";

function UserPage() {

  return (
    <div className="user">
      <NavbarUser></NavbarUser>

      <div className="hao">
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

      <div class="p-1 my-container active-cont">
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
      </div>

      <div className="container-fluid count pt-3">
        <div className="row gap-4">
          <div className="col-3 bg-white custom-div">
            {/* there are three button */}

            <div class="d-flex flex-column btnm align-items-center">
              <button type="button" class="btn btn-primary bot btn1 ">
                Explore
              </button>
              <button type="button" class="btn btn-primary bot btn2 ">
                Holdings
              </button>
              <button type="button" class="btn btn-primary bot btn3 ">
                My Watchlist
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

            <div className="container-fluid xxx">
              <div className="row mt-5">
                <div className="col-12 col-lg-6 dleft">
                  <p className="text-center groww">Most bought on Groww</p>
                  <div className="container h-75 mt-5  most">
                    <div className="row qwer  gy-2">
                      <div className="col-5 tag tag0">
                        <div className="img img0">
                          <img
                            src="/assets/NHPC_logo.png"
                            className="img-fluid smaller-image nhpc"
                            alt=""
                          ></img>
                          <h5 className="fs-6 yes">NHPC</h5>
                        </div>
                        <h5 className="fs-6 yes">₹ 83.45</h5>
                        <h5 className="fs-6 yes">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                      <div className="col-1 "></div>
                      <div className="col-5 tag tag0">
                        <div className="img img0">
                          <img
                            src="/assets/TATA_logo.png"
                            className="img-fluid smaller-image nhpc"
                            alt=""
                          ></img>
                          <h5 className="fs-6 yes">TATA Steel</h5>
                        </div>
                        <h5 className="fs-6 yes">₹ 83.45</h5>
                        <h5 className="fs-6 yes">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-5 tag tag0">
                        <div className="img img0">
                          <img
                            src="/assets/Railways_logo.png"
                            className="img-fluid smaller-image nhpc"
                            alt=""
                          ></img>
                          <h5 className="fs-6 yes">Indian Financ</h5>
                        </div>
                        <h5 className="fs-6 yes">₹ 83.45</h5>
                        <h5 className="fs-6 yes">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-5 tag tag0">
                        <div className="img img0">
                          <img
                            src="/assets/BANK_logo.png"
                            className="img-fluid smaller-image nhpc"
                            alt=""
                          ></img>
                          <h5 className="fs-6">NHPC</h5>
                        </div>
                        <h5 className="fs-6 yes">₹ 83.45</h5>
                        <h5 className="fs-6 yes">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 last">
                  <p className="text-center">Stocks in news</p>
                  <div className="container h-75 mt-5 most">
                    <div className="row  gy-2">
                      <div className="col-5 tag tag0">
                        <div className="img">
                          <h5 className="fs-6 mt-2 yes">Apollo Hospitals</h5>
                        </div>
                        <h5 className="fs-5 ">₹ 83.45</h5>
                        <h5 className="fs-6 ">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                      <div className="col-1 "></div>
                      <div className="col-5 tag tag0">
                        <div className="img">
                          
                          <h5 className="fs-6 mt-2 yes">Union Bank of india</h5>
                        </div>
                        <h5 className="fs-5">₹ 83.45</h5>
                        <h5 className="fs-6">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-5 tag">
                        <div className="img">
                          
                          <h5 className="fs-5 mt-2 yes">IOCL</h5>
                        </div>
                        <h5 className="fs-5">₹ 83.45</h5>
                        <h5 className="fs-6">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-5 tag">
                        <div className="img">
                        
                          <h5 className="fs-6 mt-2 yes">Zomato</h5>
                        </div>
                        <h5 className="fs-5">₹ 83.45</h5>
                        <h5 className="fs-6">
                          <span>+5.30(6.78%)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;