import "./RequestCard.css";

const statusClass = {
  Pending: "status-pending",
  Assigned: "status-assigned",
  Completed: "status-completed",
};

function RequestCard({ request, children }) {
  return (
    <article className="request-card" aria-label={`Request: ${request.title}`}>
      <div className="request-card-body">
        <h4 className="request-title">{request.title}</h4>
        <p className="request-meta">
          <span className="request-label">Status:</span>
          <span className={`request-status ${statusClass[request.status] || ""}`}>
            {request.status}
          </span>
        </p>
        <p className="request-meta">
          <span className="request-label">Assigned To:</span>
          <span>{request.assignedTo || "Not Assigned"}</span>
        </p>
      </div>
      {children && <div className="request-card-actions">{children}</div>}
    </article>
  );
}

export default RequestCard;
