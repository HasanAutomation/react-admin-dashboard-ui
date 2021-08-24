import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
