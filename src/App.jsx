
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import Archive from "./pages/Archive"; 

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
           <Route path="/" element={<Navigate to="/text-to-speech" />} />
           <Route path="/text-to-speech" element={<Main />} />
           <Route path="/archive" element={<Archive />} />
          </Routes>
        </main>
        <Sidebar />
      </div>
    </Router>

  );
}

export default App;