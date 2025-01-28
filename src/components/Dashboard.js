import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // Call useNavigate directly here.

  const handleNavigate = (path) => {
    navigate(path); // Use navigate here.
  };

  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      {/* Sidebar Start */}
      <aside className="left-sidebar">
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <h1 style={{ fontSize: "19px", fontWeight: "bold" }}>
                LANGUAGE-LEARNING
              </h1>
            </a>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">Home</span>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link"
                  onClick={() => handleNavigate("/translator")}
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "235px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >
                  <span>
                    <iconify-icon
                      icon="solar:home-smile-bold-duotone"
                      className="fs-6"
                    ></iconify-icon>
                  </span>
                  <span className="hide-menu">Translator</span>
                </button>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                <span className="hide-menu">MODULES</span>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link"
                  onClick={() => handleNavigate("/translator")}
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "235px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >
                  <span>
                    <iconify-icon
                      icon="solar:layers-minimalistic-bold-duotone"
                      className="fs-6"
                    ></iconify-icon>
                  </span>
                  <span className="hide-menu">Translator</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link"
                  onClick={() => handleNavigate("/speech-to-text")}
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "235px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >
                  <span>
                    <iconify-icon
                      icon="solar:danger-circle-bold-duotone"
                      className="fs-6"
                    ></iconify-icon>
                  </span>
                  <span className="hide-menu">Speaking</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link"
                  onClick={() => handleNavigate("/chat")}
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "235px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >
                  <span>
                    <iconify-icon
                      icon="solar:bookmark-square-minimalistic-bold-duotone"
                      className="fs-6"
                    ></iconify-icon>
                  </span>
                  <span className="hide-menu">Chat</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link"
                  onClick={() => handleNavigate("/write")}
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "235px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >
                  <span>
                    <iconify-icon
                      icon="solar:layers-minimalistic-bold-duotone"
                      className="fs-6"
                    ></iconify-icon>
                  </span>
                  <span className="hide-menu">Write To Task</span>
                </button>
              </li>
              <li className="sidebar-item">
                <button
                  className="sidebar-link"
                  onClick={() => handleNavigate("/feedback")}
                  aria-expanded="false"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    width: "235px",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "blue";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "black";
                  }}
                >
                  <span>
                    <iconify-icon
                      icon="solar:file-text-bold-duotone"
                      className="fs-6"
                    ></iconify-icon>
                  </span>
                  <span className="hide-menu">Analytics</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      {/* Sidebar End */}
      {/* Main wrapper */}
      <div className="body-wrapper">
        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item d-block d-xl-none">
                <a
                  className="nav-link sidebartoggler nav-icon-hover"
                  id="headerCollapse"
                  href="/"
                >
                  <i className="ti ti-menu-2"></i>
                </a>
              </li>
              <h3 style={{ margin: "30px" }}>Welcome to AI-POWERED PLATFORM</h3>
            </ul>
            <div
              className="navbar-collapse justify-content-end px-0 m-0 p-0"
              style={{ margin: "0px", padding: "0" }}
              id="navbarNav"
            >
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-icon-hover"
                    href="/"
                    id="drop2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/profile/user-1.jpg"
                      alt=""
                      width="35"
                      height="35"
                      className="rounded-circle"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                    aria-labelledby="drop2"
                  >
                    <div className="message-body">
                      <a
                        href="/"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-user fs-6"></i>
                        <p className="mb-0 fs-3">My Profile</p>
                      </a>
                      <a
                        href="/"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-mail fs-6"></i>
                        <p className="mb-0 fs-3">My Account</p>
                      </a>
                      <a
                        href="/"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-list-check fs-6"></i>
                        <p className="mb-0 fs-3">My Task</p>
                      </a>
                      <button
                        className="btn btn-outline-primary mx-3 mt-2 d-block"
                        style={{marginLeft:"100px"}}
                        onClick={()=>handleNavigate('/register')}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  height: "280px",
                }}
              >
                <div className="card-body text-center">
                
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150310012.jpg?t=st=1738049408~exp=1738053008~hmac=e79851e32249e8273ff7c76fe566666e68d077aec7d2ca45aba26839ed1eb452&w=740"
                    alt="Illustration"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100px",
                      objectFit: "contain",
                      display:'block',
                      margin:'0 auto 20px auto'
                      
                    }}
                  />
                  
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleNavigate("/translator")}
                  >
                    Translator
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  height: "280px",
                }}
              >
                <div className="card-body text-center">
                <img
                    src="https://img.freepik.com/premium-vector/man-is-giving-speech-simple-flat-design-style_995281-5386.jpg?w=740"
                    alt="Illustration"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100px",
                      objectFit: "contain",
                      display:'block',
                      margin:'0 auto 20px auto'
                      
                    }}
                  />
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleNavigate("/speech-to-text")}
                  >
                    Speaking
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  height: "280px",
                }}
              >
                <div className="card-body text-center">
                <img
                    src="https://img.freepik.com/premium-vector/chating-messaging-concept-social-network-messenger-with-modern-style-message-bubbles-smartphone-isolated_88272-1638.jpg?w=740"
                    alt="Illustration"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100px",
                      objectFit: "contain",
                      display:'block',
                      margin:'0 auto 20px auto'
                      
                    }}
                  />
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleNavigate("/chat")}
                  >
                    Chat
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card"
                style={{
                  height: "280px",
                }}
              >
                <div className="card-body text-center">
                <img
                    src="https://img.freepik.com/premium-photo/hands-businessman-working-laptop_213606-19.jpg?w=996"
                    alt="Illustration"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100px",
                      objectFit: "contain",
                      display:'block',
                      margin:'0 auto 20px auto'
                      
                    }}
                  />
                  <button
                    className="btn btn-primary mb-3"
                    onClick={() => handleNavigate("/write")}
                  >
                    Write To Task
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 px-3 bg-light rounded-3">
            <div className="d-flex justify-content-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
