// import './index_1.css';

function Modal({ setDelete }) {
  const cancelHandler = () => {
    setDelete(false);
  };
  const confirmHandler = () => {
    setDelete(false);
  };

  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        confirm
      </button>
    </div>
  );
}

export default Modal;
