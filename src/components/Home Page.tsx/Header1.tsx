import React from 'react'
import '../../css/Home.css/Header1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';

const LoginPage = () => {
  return (
      <div>
    <div className="Main">
    <div className="A11">
    <div className="a11">
        <div className="b11">
        <img src="/images/logo.png" alt="Logo"/><h2>Hireism</h2>
        </div>
        <div className="b21">
        <h4>Welcome Back</h4>
        <h6>Welcome back, Please login to your account</h6>
        <form className='form1'>
          <div className="form-group1">
            <input type="text" className="form-control" placeholder="Username or email" />
          </div>
          <div className="form-group2">
            <input type="password" className="form-control" placeholder="Enter Password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className="data">
           Don’t have an account? <a href="#">Create one</a>
        </p>
        </div>
    </div>
    <div className="a21">
        <img src="/images/asset1.png" alt="Asset"/>
    </div>
    </div>
   </div>
   </div>
 )
}
export default LoginPage;
