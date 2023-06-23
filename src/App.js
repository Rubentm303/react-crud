import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default App;
