import NavbarUser from "../Components/NavbarUser";
import { Link } from "react-router-dom";
import NavbarrDashThree from "../Components/UserNavbar/NavbarrDashThree";


function Userinterfacetwo(){
    
    return(
        <div className="userr ">
      <NavbarUser></NavbarUser>
      <NavbarrDashThree></NavbarrDashThree>

      <div className="container-fluid count pt-3">
        <div className="row gap-4">
          <div className="col-3 bg-white custom-div">
            {/* there are three button */}

            <div class="d-flex flex-column btnm align-items-center">
              <button type="button" class="btn btn-primary bot btn1 ">
                <Link to="/dashboard">Explore</Link>
              </button>
              <button type="button" class="btn btn-primary bot btn2 ">
                <Link to="/Holding">Holdings</Link>
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

            <div className="container-fluid ">
              <div className="row mt-1 hold01"> 
              <div className="col holding_area">
              <img src="/assets/tradStock.jpg" alt="" className="stockimg"></img>
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


export default Userinterfacetwo;