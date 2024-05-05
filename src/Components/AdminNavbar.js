function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light opp">
      <div className="container-fluid navv">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/logo.png"
            alt=""
            width="170"
            height="48"
            className="nav_img d-inline-block align-text-top ms-2"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
          <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="#">
                <img
                  src="/assets/icons8-question-30.png"
                  alt=""
                  width="40"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
          <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="#">
                <img
                  src="/assets/icons8-i-64.png"
                  alt=""
                  width="40"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
          <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="#">
                <img
                  src="/assets/icons8-sms-48.png"
                  alt=""
                  width="40"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <a className="nav-link" href="#">
                <img
                  src="/assets/Bell.png"
                  alt=""
                  width="45"
                  height="35"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item immg immg1 d-none d-lg-block">
              <a className="nav-link" href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  alt=""
                  width="25"
                  height="25"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li className="nav-item dropdown dropp">
              <a
                className="nav-link dropdown-toggle drop"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Change Password
                  </a>
                </li>
              </ul>
            </li>
            {/* Right-side dropdown */}
            <li className="nav-item dropdown dropp ml-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownRight"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="navbar-toggler-icon"></span>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownRight"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Explore
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Holdings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My Watchlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Stock in news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Most bought on Groww
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
