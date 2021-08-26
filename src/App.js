import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact render={() => 
              <>
              </>
            } 
          />
          <Route path="/pokemons" exact render={(props) => 
              <>
              </>
            } 
          />
          <Route path="/types" exact render={(props) => 
              <>
             </>
            } 
          />
          {/* <Route path="/about" component={About} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
