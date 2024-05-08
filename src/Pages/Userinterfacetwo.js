import NavbarUser from "../Components/NavbarUser";
import { Link } from "react-router-dom";
import NavbarrDashThree from "../Components/UserNavbar/NavbarrDashThree";


function Userinterfacetwo() {

  return (
    <div className="userr ">
      <NavbarUser></NavbarUser>
      <NavbarrDashThree></NavbarrDashThree>

      <div className="container-fluid count pt-3">
        <div className="row">
          <div className="col-3 col-md-3 bg-white custom-div">
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
          <div className=" col-9 col-md-9">
            <div className="container  cat_area ">
              <div className="row item">
                <div className="col-6 col-lg-3  text-center mb-3">
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
                <div className="col-lg-12 col-12  holding_area holding_area0">
                  <table className="col-12 col-lg-11 bg-white table_m">
                    <thead>
                      <tr className="table_header">
                        <th>Company</th>
                        <th className="table_graph"> </th>
                        <th className="table_price">Market Price</th>
                        <th className=" table_button">Watchlist</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table_row">
                        <td>Reliance</td>
                        <td>Graph</td>
                        <td className="price_div">
                          <h6>₹ 2,789.09</h6>
                          <h6 className="f_size">-28.56(1.09%)</h6>
                        </td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" class="cur-po contentPositive"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></td>
                      </tr>
                      <tr className="table_row">
                        <td>HDFC Bank</td>
                        <td>Graph</td>
                        <td className="price_div">
                          <h6>₹ 3921.05</h6>
                          <h6 className="f_size0">77.65(2.06%)</h6>
                        </td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" class="cur-po contentPositive"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></td>
                      </tr>
                      <tr className="table_row">
                        <td>Affy Cloud</td>
                        <td>Graph</td>
                        <td className="price_div">
                          <h6>₹ 1,709.09</h6>
                          <h6 className="f_size0">28.56(3.01%)</h6>
                        </td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" class="cur-po contentPositive"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></td>
                      </tr>
                      <tr className="table_row">
                        <td>ICICI Bank</td>
                        <td>Graph</td>
                        <td className="price_div">
                          <h6>₹ 1522.65</h6>
                          <h6 className="f_size0">4.56(1.09%)</h6>
                        </td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" class="cur-po contentPositive"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></td>
                      </tr>
                      <tr className="table_row">
                        <td>TCS</td>
                        <td>Graph</td>
                        <td className="price_div">
                          <h6>₹ 2,789.09</h6>
                          <h6 className="f_size0">28.56(1.09%)</h6>
                        </td>
                        <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24" class="cur-po contentPositive"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></td>
                      </tr>

                    </tbody>
                  </table>
                  <div><p className="down_size">Price will be live after stocks account is active .</p></div>

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