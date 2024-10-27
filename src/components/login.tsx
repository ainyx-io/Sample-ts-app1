import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components/login.css';
import PropTypes from 'prop-types';

// Define the structure of valid credentials
interface Credentials {
  username: string;
  password: string;
}

// Hardcoded valid credentials
const validCredentials: Credentials = {
  username: 'admin',
  password: 'admin',
};

// Simulated API login function
async function loginUser(credentials: Credentials): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === validCredentials.username &&
        credentials.password === validCredentials.password
      ) {
        resolve({ token: 'dummy-token' }); // Simulate a successful login
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
}

// Props type for LoginPage component
interface LoginPageProps {
  setToken: (token: any) => void;
}

// LoginPage functional component
const LoginPage: React.FC<LoginPageProps> = ({ setToken }) => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await loginUser({ username, password });
      setToken(token); // Set token upon successful login
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group2">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
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

// Prop types validation
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;
