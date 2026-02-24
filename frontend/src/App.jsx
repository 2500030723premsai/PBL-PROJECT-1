import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HRDashboard from "./pages/HRDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import ClientDashboard from "./pages/ClientDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/hr" element={<HRDashboard />} />
      <Route path="/employee" element={<EmployeeDashboard />} />
      <Route path="/client" element={<ClientDashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;