import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </Router>    
  );
}

export default App;
