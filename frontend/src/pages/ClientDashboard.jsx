import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import "./ClientDashboard.css";

function ClientDashboard() {
  const { requests, setRequests } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulated async request creation — mimics API POST call
  const createRequest = async () => {
    if (!title.trim()) {
      setError("Please enter a request title.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 600)); // simulate network delay
      const newRequest = {
        id: Date.now(),
        title: title.trim(),
        status: "Pending",
        assignedTo: null,
      };
      setRequests((prev) => [...prev, newRequest]);
      setTitle("");
    } catch {
      setError("Failed to create request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") createRequest();
  };

  return (
    <div className="client-dashboard-container">
      <Navbar />
      <main className="client-dashboard-content">
        <header className="client-dashboard-header">
          <h2>Client Dashboard</h2>
        </header>

        <section className="create-request-section" aria-label="Create new request">
          <h3>Create New Request</h3>
          {error && (
            <div className="form-error" role="alert" aria-live="assertive">
              {error}
            </div>
          )}
          <div className="input-group">
            <label htmlFor="request-title" className="sr-only">Request title</label>
            <input
              id="request-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter request title"
              disabled={loading}
              aria-required="true"
            />
            <button
              className="create-button"
              onClick={createRequest}
              disabled={!title.trim() || loading}
              aria-busy={loading}
            >
              {loading ? "Creating..." : "Create Request"}
            </button>
          </div>
        </section>

        <section className="client-requests-section" aria-label="My requests">
          <h3>My Requests</h3>
          {requests.length > 0 ? (
            <div className="client-requests-list">
              {requests.map((req) => (
                <RequestCard key={req.id} request={req} />
              ))}
            </div>
          ) : (
            <div className="client-empty-state" role="status">
              <p>No requests yet. Create your first request above!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default ClientDashboard;
