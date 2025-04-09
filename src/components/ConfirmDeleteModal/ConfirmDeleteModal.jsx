import "./ConfirmDeleteModal.css"

export default function ConfirmDeleteModal({extensionImg, title, onConfirm, onCancel} ) {
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) { // currentTarget is what the event listener is attached to
            onCancel()
        }
    }


    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-box">
                <div className="modal-content">
                    <img src={extensionImg} alt="" />
                    <div className="modal-text">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="modal-actions">
                    <button onClick={onCancel} className="btn-remove">Cancel</button>
                    <button onClick={onConfirm} className="btn-remove">Remove</button>
                </div>
            </div>
        </div>

    )
}