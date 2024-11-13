import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components/login.css';
import PropTypes from 'prop-types';


interface Credentials {
  username: string;
  password: string;
}


interface LoginPageProps {
  setToken: (token: any) => void;
}


const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');


  // API login function
  const loginUser = async (credentials: Credentials): Promise<any> => {
    try {
      const response = await fetch('/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });


      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Invalid credentials');
      }


      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await loginUser({ username, password });
      setToken(token); // Set token on successful login
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      setErrorMessage('Invalid username or password'); // Show error message for invalid login
    }
  };


  return (
    
    <div className="login-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 form-section">
          <div className="form-inner">
            <h1>Welcome Back</h1>
            <h3>Sign Into Your Account</h3>
            <form className="form1" onSubmit={handleSubmit}>
              <div className="form-group form-box">
                <input type="text" name="email" className="form-control" placeholder="Username or email"
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                  />
              </div>
              <div className="form-group form-box">
                <input type="password" name="password" className="form-control"  placeholder="Password"
                  value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-theme">Login</button>
              </div>
            </form>
            <p>Don't have an account? <a href="register-5.html" className="thembo"> Register here</a></p>
          </div>
        </div>
        <div className="col-lg-12 bg-img">
          <img src="./images/asset1.png" alt="Asset" />
        </div>
      </div>
    </div>
  </div>

  );
};


LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};


export default LoginPage;
