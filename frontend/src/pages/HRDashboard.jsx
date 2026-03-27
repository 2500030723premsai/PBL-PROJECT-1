import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import "./HRDashboard.css";

function HRDashboard() {
  const {
    requests, setRequests,
    pendingRequests, assignedRequests, completedRequests,
  } = useContext(AppContext);
  const [error, setError] = useState(null);

  // Simulated async assign — mimics API PATCH call
  const assignEmployee = async (id) => {
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 400));
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, assignedTo: "Employee1", status: "Assigned" } : req
        )
      );
    } catch {
      setError("Failed to assign employee. Please try again.");
    }
  };

  return (
    <div className="hr-dashboard-container">
      <Navbar />
      <main className="hr-dashboard-content">
        <header className="hr-dashboard-header">
          <h2>HR Dashboard</h2>
        </header>

        <section className="hr-dashboard-stats" aria-label="Request statistics">
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
        </section>

        {error && (
          <div className="form-error" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <section className="hr-requests-section" aria-label="All requests">
          <h3>All Requests</h3>
          {requests.length > 0 ? (
            <div className="hr-requests-list">
              {requests.map((req) => (
                <RequestCard key={req.id} request={req}>
                  <button
                    className="assign-button"
                    onClick={() => assignEmployee(req.id)}
                    disabled={req.status !== "Pending"}
                    aria-label={`Assign employee to request: ${req.title}`}
                  >
                    {req.status === "Pending" ? "Assign Employee" : req.status}
                  </button>
                </RequestCard>
              ))}
            </div>
          ) : (
            <div className="hr-empty-state" role="status">
              <p>No requests available.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default HRDashboard;
