import { FC, FormEvent } from 'react';
import companyImage from '../../../assets/images/azerion.png';
import './Login.css';

const Login: FC = () => {

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Login clicked');
  }

  return (
    <div className='main-container'>
      <div className="login-container">
        <div className="company-image-container">
          <img className="company-image" src={companyImage} alt="azerion" />
        </div>

        <div className="welcome-section">
          <h2>Login</h2>
          <p>Sign In to your account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className='login-input'>
            <p>Email: </p>
            <div>
              <input type="text" placeholder='Enter email' />
            </div>
          </div>
          <div className='login-input'>
            <p>Password: </p>
            <div>
              <input type="password" placeholder='Enter password' />
            </div>
          </div>
          <div className='login-input'>
            <button type="submit"> Login </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;