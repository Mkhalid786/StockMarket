import AdminNavbar from "../Components/AdminNavbar";
import Navbarr from "../Components/Navbarr";
import "./AdminDeshboard.css";


function AdminDeshboard() {
  return (
    <div className=" danger">
      <AdminNavbar></AdminNavbar>
      <Navbarr></Navbarr>

      <div className="container-fluid back pt-1">
        <div className="row gap-3">
          <div className="col-3 bg-white custom-div">
            {/* there are three button */}

            <div class="btnm1">
              <button type="button" class="btn btn-primary my-2 Admin1">
                Deshboard
              </button>
              <button type="button" class="btn btn-primary my-2 Admin1">
                User
              </button>
              <button type="button" class="btn btn-primary my-2 Admin1">
                Sub Admin
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-primary dropdown-toggle Adminbdrop"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Active All  User
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
              <button type="button" class="btn btn-primary my-2 Admin1">
                Signal
              </button>
              
              <button type="button" class="btn btn-primary my-2 Admin1">
                System
              </button>
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
            </div>

          </div>
          <div className=" col-12 col-lg-9 chart_div">
            <div className="container-fluid bg-white">
              <div className="col-12 col-lg-12 niifty d-flex justify-content-center align-items-center">
                Put Chart here
              </div>
            </div>
            <div className="container  cat_area">
              <div className="row items">
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 className="fs-5 mt-1">SENSEX</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 className="font-bold fs-5 mt-1">BANK NIFTY</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 className="font-bold fs-5 mt-1">FINNIFTY</h4>
                    <p>
                      72,975.85 <span>+213.64 (0.29%)</span>
                    </p>
                  </div>
                </div>
                <div className="col-6 col-lg-3 text-center">
                  <div className="conts">
                    <h4 className="font-bold fs-5 mt-1">All Indices</h4>
                    <p>Indian and Global</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 bulk col-lg-4">
                  <p className="text-center F_gain">F & O Gainers</p>
                  <img src="/assets/Screenshot 2024-05-05 181716.png" className="gain_img"></img>
                </div>
                <div className="col-12 col-lg-8 bulk">
                  <p className="F_gain">Bulk Deals</p>
                  <div class="table-responsive">
  <table className="bg-white table_m">
    <thead>
      <tr className="table_header">
        <th className="comp_header">Symbol</th>
        <th className="table_graph">Basic eps current <br/> year</th>
        <th className="table_price">Diluted eps current <br/> year</th>
        <th className="">Face value per share</th>
        <th className="">Book value per share</th>
        <th className="">Dividend per share</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table_row">
        <td className="tabe_d text-start">MRF</td>
        <td>1813.58</td>
        <td className="price_div">1201.81</td>
        <td>10</td>
        <td>34687.88</td>
        <td>175</td>
      </tr>
      <tr className="table_row clr">
        <td className="tabe_d text-start">MARUTI</td>
        <td>351.58</td>
        <td className="price_div">195.81</td>
        <td>10</td>
        <td>3487.88</td>
        <td>100</td>
      </tr>
      <tr className="table_row">
        <td className="tabe_d text-start">ATUL</td>
        <td>813.58</td>
        <td className="price_div">1201.81</td>
        <td>10</td>
        <td>4687.88</td>
        <td>105</td>
      </tr>
      <tr className="table_row clr">
        <td className="tabe_d text-start">SHREECEM</td>
        <td>413.58</td>
        <td className="price_div">1201.81</td>
        <td>10</td>
        <td>34687.88</td>
        <td>65</td>
      </tr>
      <tr className="table_row">
        <td className="tabe_d text-start">HONDA</td>
        <td>1813.58</td>
        <td className="price_div">1201.81</td>
        <td>5</td>
        <td>3687.88</td>
        <td>155</td>
      </tr>
      <tr className="table_row clr">
        <td className="tabe_d text-start">ACTIVA</td>
        <td>1813.58</td>
        <td className="price_div">1201.81</td>
        <td>10</td>
        <td>34687.88</td>
        <td>175</td>
      </tr>
    </tbody>
  </table>
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
export default AdminDeshboard;
