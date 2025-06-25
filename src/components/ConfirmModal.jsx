export default function ConfirmModal({ message, onConfirm, onCancel }) {
  const styles = {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#fff",
      padding: "24px",
      borderRadius: "8px",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    message: {
      marginBottom: "20px",
      fontSize: "18px",
      color: "#333",
    },
    actions: {
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    confirmButton: {
      backgroundColor: "#e53935",
      color: "#fff",
    },
    cancelButton: {
      backgroundColor: "#ccc",
      color: "#000",
    },
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <p style={styles.message}>{message || "Are you sure?"}</p>
        <div style={styles.actions}>
          <button
            style={{ ...styles.button, ...styles.confirmButton }}
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            style={{ ...styles.button, ...styles.cancelButton }}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
