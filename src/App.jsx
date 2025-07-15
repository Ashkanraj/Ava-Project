import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Archive from "./pages/Archive"; 

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
           <Route path="/" element={<Navigate to="/dashboard" />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;