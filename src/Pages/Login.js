import React from 'react';

function Login() {
  return (
    <div className=" ms-5 mt-5 login d-flex justify-content-center align-items-center">
  <div className="col-md-6 " style={{ width: '40%', height: '70vh' }}>
    <div className="card right h-100">
      <div className="card-body mt-2 head">
        <h5 className="card-title fs-3">Enter your Email and<br></br> password to login</h5>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className='mt-4'>Email address</label>
            <input type="email" className="form-control mt-2 w-60" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className='mt-3'>Password</label>
            <input type="password" className="form-control mt-2" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div className="col-md-6" style={{ width: '50%', height: '70vh' }}>
    <div className="text-center h-100">
      <img src="https://s3-alpha-sig.figma.com/img/4f2b/df31/3917b6570a9add93f8edde1c4cede6ef?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fkioYrjdVNenEo28wj55ueQk2p8Vgdt~J7D5XMt1LhioSKubVNXKB8OatR9C5P4m4dX6DXeNqLaUTJYVbcTSl7iSUm4n3mkUqsKeUAJX3JZJP~Uae1d5oIrE0412sOSp4O7DoNRTOvHsINwnjuodWXg7oeZ0kaL1Eqy8u1cjzWTlceziyTFmzOJWe1RaiZc6OLWsCXmheuGsJOBXfkV6onj4Moy0zN4~mmpd0NJqGExxhMNAbu-pjQoZtegGbvJhg4xYaKvHHtLtcjaChUUD6b314UZeo16zMlw4k1dOFP~d25my0X8t8Y7b~SyHYd1ZaiiSdvTw6dw3aD5i4NfLAA__" className="img-fluid h-100" alt="Placeholder" />
    </div>
  </div>
</div>

  );
}

export default Login;
