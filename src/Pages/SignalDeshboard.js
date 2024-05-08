import AdminNavbar from "../Components/AdminNavbar";
import Navbarr from "../Components/Navbarr";
import "./SignalDeshboard.css";


function SignalDeshboard() {
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
          <div className=" col-12 col-lg-9 bg-white cover">
            <div className="container py-3">
              <div className="row justify-content-between">
                <div className="col-lg-2 col-3  mt-2">
                  <p className="signal">Signal</p>
                </div>
                <div className="col-lg-4 col-8 btn_both">
                  <button type="button" class="btn btn-primary bttn1">Export-excel</button>
                  <button type="button" class="btn btn-primary bttn">Refresh</button>
                </div>

              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col">
                <form class="row align-items-center form_reset">

<div class="col-auto col-12">
  <label for="symbolNameDropdown">Symbol Name</label>
  <select class="form-select symbol_form" id="symbolNameDropdown">

    <option value="1">All</option>
    <option value="2">Option 2</option>

  </select>
</div>


<div class="col-auto col-12">
  <label for="segmentDropdown">Segment</label>
  <select class="form-select symbol_form" id="segmentDropdown">

    <option value="1">All</option>
    <option value="2">Option 2</option>
    {/* <!-- Add more options as needed --> */}
  </select>
</div>


<div class="col-auto col-8">
  <label for="startDropdown">Start</label>
  <select class="form-select symbol_form" id="startDropdown">

    <option value="1">All</option>
    <option value="2">Option 2</option>

  </select>
</div>


<div class="col-auto col_auto1 mt-2">
  <button type="submit" class="btn btn-primary submit">Submit</button>
</div>
</form>
            
                </div>
              </div>
            </div>

            <div className="containe">
              <div className="row">
                <div className="col">
                  <input placeholder="Filter table"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignalDeshboard;
