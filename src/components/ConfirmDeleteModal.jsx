import "../styles/ConfirmDeleteModal.css"

export default function ConfirmDeleteModal({title, message, onConfirm, onCancel} ) {
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="modal-actions">
                    <button onClick={onConfirm}>Yes, delete it</button>
                    <button onClick={onCancel} className="btn-remove">Cancel</button>
                </div>
            </div>
        </div>

    )
}