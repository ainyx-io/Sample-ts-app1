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
    <div>
      <div className="Main">
        <div className="A11">
          <div className="a11">
            <div className="b11">
              <img src="/images/logo.png" alt="Logo" />
              <h2>Hireism</h2>
            </div>
            <div className="b21">
              <h4>Welcome Back</h4>
              <h6>Welcome back, Please login to your account</h6>
              <form className='form1' onSubmit={handleSubmit}>
                <div className="form-group1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username or email"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
              </form>
              <p className="data">
                Don’t have an account? <a href="#">Create one</a>
              </p>
            </div>
          </div>
          <div className="a21">
            <img src="/images/asset1.png" alt="Asset" />
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
