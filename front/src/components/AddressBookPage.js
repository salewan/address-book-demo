import React from 'react';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { MdPersonAdd } from 'react-icons/md';

import DeleteModal from './DeleteModal';
import AddressFormModal from './AddressFormModal';
import FilterInput from './FilterInput';
import ItemList from './ItemList';
import * as api from '../api';
import {newAddress, handleError} from '../utils';

class AddressBookPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      address: null,
      errors: {},
      deleteAddress: null
    }
  }

  handleApiError = (error) => {
    handleError(error, errors => this.setState({errors}));
  };

  toggleDeleteForm = (deleteAddress, cb) => {
    this.setState(() => ({deleteAddress, errors: {}}), cb)
  };

  toggleAddressForm = (address, cb) => {
    this.setState(() => ({address, errors: {}}), cb)
  };

  doFilter = query => {
    api.filterAddresses(query)
      .then(response => {
        this.setState(() => ({data: response.data, lastQuery: query}))
      })
      .catch(this.handleApiError);
  };

  refreshData = () => {
    this.doFilter(this.state.lastQuery || '');
  };

  doSave = addr => {
    api.saveOrUpdateAddress(addr)
      .then(() => {
        this.toggleAddressForm(null, this.refreshData);
      })
      .catch(this.handleApiError)
  };

  doDelete = () => {
    api.deleteAddress(this.state.deleteAddress)
      .then(() => {
        this.toggleDeleteForm(null, this.refreshData)
      })
      .catch(this.handleApiError)
  };

  componentDidMount() {
    this.doFilter('');
  }

  render() {
    const {errors} = this.state;
    return (
      <>
        <Alert color="danger" isOpen={!!errors.message} style={{marginTop: '-16px'}}>
          {errors.message}
        </Alert>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>

              <div className='filter-container'>
                <FilterInput
                  className='filter-input'
                  onChange={this.doFilter}
                />

                <Button
                  className='filter-add-button'
                  color="success"
                  onClick={() => this.toggleAddressForm(newAddress())}
                >
                  <MdPersonAdd />
                </Button>
              </div>


              <ItemList
                data={this.state.data}
                onDelete={this.toggleDeleteForm}
                onEdit={this.toggleAddressForm}
              />

              <AddressFormModal
                address={this.state.address}
                errors={errors}
                toggle={() => this.toggleAddressForm(null)}
                onSave={this.doSave}
              />

              <DeleteModal
                address={this.state.deleteAddress}
                errors={errors}
                toggle={() => this.toggleDeleteForm(null)}
                onDelete={this.doDelete}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default AddressBookPage;