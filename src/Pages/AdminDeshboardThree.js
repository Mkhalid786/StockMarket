import AdminNavbar from "../Components/AdminNavbar";
import Navbarr from "../Components/Navbarr";
import "./AdminDeshboardThree.css";


function AdminDeshboardThree() {
  return (
    <div>
      <AdminNavbar></AdminNavbar>
      <Navbarr></Navbarr>

      <div className="container-fluid back pt-3">
        <div className="row gap-3">
          <div className="col-3 bg-white custom-div">
            {/* there are three button */}

            <div class="btnm1">
  <button type="button" class="btn btn-primary my-2 Admin1">
    Strategy
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb2">
    Services
  </button>
  <button type="button" class="btn btn-primary  my-2 Adminb3">
    Group Services
  </button>
  <button type="button" class="btn btn-primary my-2  Adminb3">
    Report
  </button>
  <button type="button" class="btn btn-primary  my-2 Adminb3">
    Clients
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Signup Clients
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Trad History
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Trading Status
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Message Broadcast
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Transaction Licence
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    API Create Info
  </button>
  <button type="button" class="btn btn-primary my-2  Adminb3">
    Help Center
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Release Updates
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Release Updates
  </button>
  <button type="button" class="btn btn-primary my-2  Adminb3">
    Release Updates
  </button>
  <button type="button" class="btn btn-primary my-2 Adminb3">
    Release Updates
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
export default AdminDeshboardThree;
