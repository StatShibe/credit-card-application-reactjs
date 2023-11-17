import LoginPage from './pages/LoginPage';
import NavigationBar from './pages/CustomerDashboard';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  useNavigate
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <LoginPage navigate={useNavigate}/> }/>
          <Route path="/Dashboard" element = {<NavigationBar navigate={useNavigate}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
