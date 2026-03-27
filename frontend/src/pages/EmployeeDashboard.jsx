import { useContext, useMemo, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import "./EmployeeDashboard.css";

function EmployeeDashboard() {
  const { requests, setRequests, user } = useContext(AppContext);
  const [error, setError] = useState(null);

  // Derived state — only requests assigned to this employee
  const assignedRequests = useMemo(
    () => requests.filter((req) => req.assignedTo === "Employee1"),
    [requests]
  );
  const completedCount = useMemo(
    () => assignedRequests.filter((r) => r.status === "Completed").length,
    [assignedRequests]
  );
  const pendingCount = assignedRequests.length - completedCount;

  // Simulated async complete — mimics API PATCH call
  const completeRequest = async (id) => {
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 400));
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: "Completed" } : req
        )
      );
    } catch {
      setError("Failed to update request. Please try again.");
    }
  };

  return (
    <div className="employee-dashboard-container">
      <Navbar />
      <main className="employee-dashboard-content">
        <header className="employee-dashboard-header">
          <h2>Employee Dashboard</h2>
        </header>

        <section className="employee-dashboard-stats" aria-label="Task statistics">
          <div className="employee-stat-card">
            <h3>Assigned Tasks</h3>
            <p>{assignedRequests.length}</p>
          </div>
          <div className="employee-stat-card">
            <h3>Completed</h3>
            <p>{completedCount}</p>
          </div>
          <div className="employee-stat-card">
            <h3>Pending</h3>
            <p>{pendingCount}</p>
          </div>
        </section>

        {error && (
          <div className="form-error" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <section className="employee-requests-section" aria-label="Assigned requests">
          <h3>My Assigned Requests</h3>
          {assignedRequests.length > 0 ? (
            <div className="employee-requests-list">
              {assignedRequests.map((req) => (
                <RequestCard key={req.id} request={req}>
                  <button
                    className="complete-button"
                    onClick={() => completeRequest(req.id)}
                    disabled={req.status === "Completed"}
                    aria-label={`Mark request as completed: ${req.title}`}
                  >
                    {req.status === "Completed" ? "Completed" : "Mark Completed"}
                  </button>
                </RequestCard>
              ))}
            </div>
          ) : (
            <div className="employee-empty-state" role="status">
              <p>No requests assigned to you yet.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default EmployeeDashboard;
