import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Navbar from "../components/Navbar";
import RequestCard from "../components/RequestCard";
import "./ClientDashboard.css";

function ClientDashboard() {
  const { requests, setRequests } = useContext(AppContext);
  const [title, setTitle] = useState("");

  const createRequest = () => {
    if (!title.trim()) {
      alert("Please enter a request title");
      return;
    }
    const newRequest = {
      id: Date.now(),
      title,
      status: "Pending",
      assignedTo: null
    };
    setRequests([...requests, newRequest]);
    setTitle("");
  };

  return (
    <div className="client-dashboard-container">
      <Navbar />
      <div className="client-dashboard-content">
        <div className="client-dashboard-header">
          <h2>Client Dashboard</h2>
        </div>

        <div className="create-request-section">
          <h3>Create New Request</h3>
          <div className="input-group">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter request title"
            />
            <button 
              className="create-button" 
              onClick={createRequest}
              disabled={!title.trim()}
            >
              Create Request
            </button>
          </div>
        </div>

        <div className="client-requests-section">
          <h3>My Requests</h3>
          {requests.length > 0 ? (
            <div className="client-requests-list">
              {requests.map((req) => (
                <RequestCard key={req.id} request={req} />
              ))}
            </div>
          ) : (
            <div className="client-empty-state">
              <p>No requests yet. Create your first request above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientDashboard;