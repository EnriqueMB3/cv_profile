import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, header, content:ContentModal  }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" >
      <div className="modal">
        <div className="modal-header">
          <h2>{header}</h2>
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <ContentModal toggle={hide}/>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;