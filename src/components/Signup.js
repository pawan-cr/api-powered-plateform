import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path); // Use navigate here.
  };
  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <p  className="text-nowrap logo-img text-center d-block py-3 w-100"
                style={{color:"blue"}}
                >
                  
                  LANGUAGE LEARNING PLATEFORM
                </p>
                
                <form>
                  <div className="mb-3">
                    <label for="exampleInputtext1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button  className="btn btn-primary w-100 py-8 fs-4 mb-4"
                  onClick={()=>handleNavigate('/login')}
                  >Sign Up</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                    <p className="text-primary fw-bold ms-2" style={{marginTop:"17px", cursor:"pointer"}} 
                    onClick={()=>handleNavigate('/login')}
                    >Sign In</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup