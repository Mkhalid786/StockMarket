import AdminNavbar from "../Components/AdminNavbar";
import Navbarr from "../Components/Navbarr";
import "./AdminDeshboardTwo.css";

function AdminDeshboardTwo() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Navbarr></Navbarr>

      <div className="container-fluid back pt-3">
        <div className="row gap-4">
          <div className="col-3 bg-white custom-div">
            {/* there are three button */}

            <div class="btnm1">
              <button type="button" class="btn btn-primary  mt-3 Adminb ">
                Deshboard
              </button>
              <button type="button" class="btn btn-primary  Adminb2">
                User
              </button>
              <button type="button" class="btn btn-primary  Adminb">
                Sub Admin
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle Adminbd"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Active User
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li className="act_user">
                    1. Kritika{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                  <li className="act_user">
                    2. Saniya{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                  <li className="act_user">
                    3. Arsalan{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                  <li className="act_user">
                    4. Raj{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                  <li className="act_user">
                    5. Riddhima{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                  <li className="act_user">
                    6. Khalid{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                  <li className="act_user">
                    7. Soniya{" "}
                    <img
                      src="/assets/icons8-circle-48.png"
                      className="activeC"
                    ></img>
                  </li>
                </ul>
              </div>
              <button type="button" class="btn btn-primary Adminb3">
                Signals
              </button>
              <button type="button" class="btn btn-primary Adminb3">
                System
              </button>
            </div>
          </div>
          <div className=" col-12 col-lg-9  chart_div">
            <div className="container-fluid bg-white">
              <div className="col-12 col-lg-12 niifty d-flex justify-content-center align-items-center">
                Put Chart here
              </div>
            </div>
            <div className="container  cat_area">
              <div className="row items">
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 class="font-bold fs-5 mt-2">SENSEX</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 class="font-bold fs-5 mt-2">BANK NIFTY</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 class="font-bold fs-5 mt-2">FINNIFTY</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 class="font-bold fs-5 mt-2">All Indices</h4>
                    <p>Indian and Global</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-12 bulk col-lg-4">
                        <p className="text-center F_gain">F & O Gainers</p>
                        <img src="/assets/Screenshot 2024-05-05 181716.png" className="gain_img"></img>
                    </div>
                    <div className="col col-lg-8 bulk">
                        <p className="F_gain">Bulk Deals</p>
                        <img src="/assets/Screenshot 2024-05-05 181747.png" className="gain_img1"></img>

                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminDeshboardTwo;