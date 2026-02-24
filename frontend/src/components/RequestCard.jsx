function RequestCard({ request, children }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px"
    }}>
      <p><b>Title:</b> {request.title}</p>
      <p><b>Status:</b> {request.status}</p>
      <p><b>Assigned To:</b> {request.assignedTo || "Not Assigned"}</p>
      {children}
    </div>
  );
}

export default RequestCard;