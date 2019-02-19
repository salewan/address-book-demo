import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from 'reactstrap';
import { MdEdit, MdDelete, MdEmail, MdPhone } from 'react-icons/md';

function ItemList(props) {
  const {data, onEdit, onDelete} = props;
  return (
    <>
      {data.length > 0 &&
        <ListGroup>
          {data.map((addr, i) => {
            return (
              <ListGroupItem key={i}>
                <div className='list-container'>

                  <div className='list-content-main'>
                    <div>{addr.name}</div>
                    {addr.email && <div className='minor'><MdEmail/>{' '}{addr.email}</div>}
                    {addr.phone && <div className='minor'><MdPhone/>{' '}{addr.phone}</div>}
                  </div>

                  <div className='list-content-controls'>
                    <MdEdit className='md-icon' onClick={() => onEdit(addr)}/>
                    <MdDelete className='md-icon' onClick={() => onDelete(addr)}/>
                  </div>

                </div>
              </ListGroupItem>
            )
          })}
        </ListGroup>
      }
    </>
  )
}

ItemList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default ItemList;