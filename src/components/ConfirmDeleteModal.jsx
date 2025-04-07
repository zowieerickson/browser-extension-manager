
export default function ConfirmDeleteModal({title, message, onConfirm, onCancel} ) {
    return (
        <div className="modal">
            <h2>{title}</h2>
            <p>{message}</p>
            <button onClick={onConfirm}>Yes, delete it</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}