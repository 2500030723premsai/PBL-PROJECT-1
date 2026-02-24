import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import "./HRDashboard.css";

function HRDashboard() {
  const { requests, setRequests } = useContext(AppContext);

  const assignEmployee = (id) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, assignedTo: "Employee1", status: "Assigned" } : req
    );
    setRequests(updated);
  };

  const pendingRequests = requests.filter(req => req.status === "Pending");
  const assignedRequests = requests.filter(req => req.status === "Assigned");
  const completedRequests = requests.filter(req => req.status === "Completed");

  return (
    <div className="hr-dashboard-container">
      <Navbar />
      <div className="hr-dashboard-content">
        <div className="hr-dashboard-header">
          <h2>HR Dashboard</h2>
        </div>

        <div className="hr-dashboard-stats">
          <div className="hr-stat-card">
            <h3>Total Requests</h3>
            <p>{requests.length}</p>
          </div>
          <div className="hr-stat-card">
            <h3>Pending</h3>
            <p>{pendingRequests.length}</p>
          </div>
          <div className="hr-stat-card">
            <h3>Assigned</h3>
            <p>{assignedRequests.length}</p>
          </div>
          <div className="hr-stat-card">
            <h3>Completed</h3>
            <p>{completedRequests.length}</p>
          </div>
        </div>

        <div className="hr-requests-section">
          <h3>All Requests</h3>
          {requests.length > 0 ? (
            <div className="hr-requests-list">
              {requests.map((req) => (
                <RequestCard key={req.id} request={req}>
                  <button 
                    className="assign-button" 
                    onClick={() => assignEmployee(req.id)}
                    disabled={req.status !== "Pending"}
                  >
                    {req.status === "Pending" ? "Assign Employee" : "Already Assigned"}
                  </button>
                </RequestCard>
              ))}
            </div>
          ) : (
            <div className="hr-empty-state">
              <p>No requests available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HRDashboard;