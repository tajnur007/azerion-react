import { FC } from 'react';
import reactLogo from '../../assets/images/reactRogo.svg';
import './Home.css';

const Home: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/auth/login"
          rel="noopener noreferrer"
        >
          Navigate to Auth page
        </a>
      </header>
    </div>
  );
};

export default Home;