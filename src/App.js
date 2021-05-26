import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar,Footer,Home,Faq,Statistics,Verify,Login,RegisterHelp,Contact} from "./Components";
import './App.css'


function App() {
  return (
    <div className="App">
      {
      <Router>
        <Navbar/>
          <Switch> 
            <Route path="/" exact component={() => <Home />} />
            <Route path="/statistics" exact component={() => <Statistics/>} />
            <Route path="/faq" exact component={() => <Faq />} />
            <Route path="/verify" exact component={() => <Verify />} />
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/RegisterHelp" exact component={() => <RegisterHelp />} />
            <Route path="/Contact" exact component={() => <Contact />} />        
          </Switch>
        <Footer/>
      </Router>

      }
    

    </div>
  );
}

export default App;