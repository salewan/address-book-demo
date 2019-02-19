import axios from 'axios';

export function filterAddresses(query) {
  let path;
  if (!query || query.trim().length === 0) path = 'address';
  else path = `address/filterAll?query=${query}`;

  return axios.get(path);
}

export function saveOrUpdateAddress(addr) {
  if (!addr) return Promise.reject("addr required");

  if (addr.id) {
    return axios.patch('address',  {...addr})
  } else {
    return axios.post('address', {...addr})
  }
}

export function deleteAddress(addr) {
  if (!addr) return Promise.reject("addr required");

  return axios.delete(`address/${addr.id}`);
}