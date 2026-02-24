import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
  const { requests, setRequests } = useContext(AppContext);

  const completeRequest = (id) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: "Completed" } : req
    );
    setRequests(updated);
  };

  const assignedRequests = requests.filter(
    (req) => req.assignedTo === "Employee1"
  );

  return (
    <div className="employee-dashboard-container">
      <Navbar />
      <div className="employee-dashboard-content">
        <div className="employee-dashboard-header">
          <h2>Employee Dashboard</h2>
        </div>

        <div className="employee-dashboard-stats">
          <div className="employee-stat-card">
            <h3>Assigned Tasks</h3>
            <p>{assignedRequests.length}</p>
          </div>
          <div className="employee-stat-card">
            <h3>Completed</h3>
            <p>{assignedRequests.filter(req => req.status === "Completed").length}</p>
          </div>
          <div className="employee-stat-card">
            <h3>Pending</h3>
            <p>{assignedRequests.filter(req => req.status !== "Completed").length}</p>
          </div>
        </div>

        <div className="employee-requests-section">
          <h3>My Assigned Requests</h3>
          {assignedRequests.length > 0 ? (
            <div className="employee-requests-list">
              {assignedRequests.map((req) => (
                <RequestCard key={req.id} request={req}>
                  <button 
                    className="complete-button" 
                    onClick={() => completeRequest(req.id)}
                    disabled={req.status === "Completed"}
                  >
                    {req.status === "Completed" ? "Completed" : "Mark Completed"}
                  </button>
                </RequestCard>
              ))}
            </div>
          ) : (
            <div className="employee-empty-state">
              <p>No requests assigned to you yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;