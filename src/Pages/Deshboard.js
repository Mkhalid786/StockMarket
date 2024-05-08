import AdminNavbar from "../Components/AdminNavbar";
import Navbarr from "../Components/Navbarr";
import "./Deshboard.css";


function Deshboard() {
  return (
    <div className=" main">
      <AdminNavbar></AdminNavbar>
      <Navbarr></Navbarr>

      <div className="container-fluid pt-1">
        <div className="row gap-3">
          <div className="col-3 bg-white custom-div">
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
          <div className=" col-12 col-lg-9 cover">
            <div className="container py-3 up_main">
              <div className="row justify-content-between mt-4">
                <div class="col-md-2 col-2 bg-white shadow p-3 rounded-lg in_div" >
                  <div className=" text_in ">121</div>
                  <div className="text_inp">Total Live Account</div>
                </div>


                <div class="col-md-2 col-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">0</div>
                  <div className="text_inp">Demo Account</div>
                </div>

                <div class="col-md-2 col-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">60</div>
                  <div className="text_inp">Total Licence</div>
                </div>

                <div class="col-md-2  col2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">112</div>
                  <div className="text_inp">Total 2 day service</div>
                </div>
              </div>
              
              <div className="row justify-content-between row_two mt-5">
                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">121</div>
                  <div className="text_inp">Total Live Account</div>
                </div>
                


                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">0</div>
                  <div className="text_inp">Demo Account</div>
                </div>

                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">60</div>
                  <div className="text_inp">Total Licence</div>
                </div>

                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">112</div>
                  <div className="text_inp">Total 2 day service</div>
                </div>
              </div>

              <div className="row justify-content-between row_three mt-5 ">
                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">121</div>
                  <div className="text_inp">Total Live Account</div>
                </div>
                


                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">0</div>
                  <div className="text_inp">Demo Account</div>
                </div>

                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">60</div>
                  <div className="text_inp">Total Licence</div>
                </div>

                <div class="col-md-2 bg-white p-3 shadow rounded-lg in_div" >
                  <div className=" text_in ">112</div>
                  <div className="text_inp">Total 2 day service</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
export default Deshboard;
