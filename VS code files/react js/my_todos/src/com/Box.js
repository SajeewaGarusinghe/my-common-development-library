// import './index_1.css';
import Modal from './Modal.js';
import Backdrop from './Backdrop.js';
import { useState } from 'react';

function Box({ title }) {
  const [isDeleted, setDelete] = useState(false);
  const deleteHandler = () => {
    setDelete(true);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button className="btn" onClick={deleteHandler}>
        Delete
      </button>
      {isDeleted && <Backdrop />}
      {isDeleted && <Modal setDelete={setDelete} />}
    </div>
  );
}

export default Box;
