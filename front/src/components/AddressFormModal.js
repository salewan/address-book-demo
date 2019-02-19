import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'reactstrap';

import {newAddress} from '../utils/address';

class AddressFormModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...newAddress()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.address !== nextProps.address) {
      this.setState({...nextProps.address})
    }
  }

  toggle = () => {
    this.props.toggle();
  };

  getOnChangeHandler = (fieldName) => (evt) => {
    const value = evt.target.value;
    this.setState(() => ({[fieldName]: value}));
  };

  onSave = () => {
    this.props.onSave({...this.state});
  };

  render() {
    const {address, errors} = this.props;
    const title = address && address.id ? 'Edit' : 'Create';
    const getFeedback = (field) => (errors.fields && errors.fields[field]) || '';
    return (
      <>
        <Modal isOpen={!!address} toggle={this.toggle} className={''}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label>Name</Label>
              <Input
                type='text'
                value={this.state.name}
                onChange={this.getOnChangeHandler('name')}
                invalid={!!getFeedback('name')}
              />
              <FormFeedback>{getFeedback('name')}</FormFeedback>
              <FormText>Name is mandatory</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Email</Label>
              <Input
                type='email'
                value={this.state.email}
                onChange={this.getOnChangeHandler('email')}
                invalid={!!getFeedback('email')}
              />
              <FormFeedback>{getFeedback('email')}</FormFeedback>
              <FormText>Email is mandatory</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Phone</Label>
              <Input
                type='text'
                value={this.state.phone}
                onChange={this.getOnChangeHandler('phone')}
                invalid={!!getFeedback('phone')}
              />
              <FormFeedback>{getFeedback('phone')}</FormFeedback>
            </FormGroup>

            {!!errors.message && <div style={{color: 'red'}}>{errors.message}</div>}

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSave}>{title}</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

AddressFormModal.propTypes = {
  address: PropTypes.object,
  toggle: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default AddressFormModal;