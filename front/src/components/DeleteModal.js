import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

function DeleteModal(props) {
  const {address, toggle, onDelete, errors: {message}} = props;

  return (
    <Modal isOpen={!!address} toggle={toggle} className={''}>
      <ModalHeader toggle={toggle}>Delete contact?</ModalHeader>
      <ModalBody>
        <h2>{address && address.name}</h2>
        <div className='minor'>is going to be removed</div>
        {message && <div style={{color: 'red'}}>{message}</div>}
        <ModalFooter>
          <Button color="primary" onClick={onDelete}>Remove</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}

DeleteModal.propTypes = {
  address: PropTypes.object,
  toggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default DeleteModal;