import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './Component/main/MainComponent';

import 'bootstrap/dist/css/bootstrap.min.css';


// let maincontent = REACT_APP_CONTEXT_PATH+"/maincontent";



function App() {
  return (
    <div className="App">
    <Router>

    {/* <Route path={''} component={MainContent} />  */}
              <MainContent></MainContent>    
    </Router>
  
   
  </div>
  )
}

export default App;
