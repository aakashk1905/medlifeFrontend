import Navbar from "./Components/Navbar";
import DiseasePage from "./Pages/DiseasePage";
import Landingpage from "./Pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" element={<Landingpage />} />
          <Route path="/:disease" element={<DiseasePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
