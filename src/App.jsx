import { useState } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
// import ShowProducts from "./pages/show_products";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/show-products" element={<ShowProducts />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
