import LoginPage from './pages/LoginPage';
import HomePage from './pages/CustomerDashboard';
import CreditApplicationForm from './pages/ApplicationPage';
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
          <Route path="/Dashboard" element = {<HomePage navigate={useNavigate}/>}/>
          <Route path='/Application' element = {<CreditApplicationForm navigate = {useNavigate}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
