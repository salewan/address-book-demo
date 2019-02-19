export function handleError(error, cb) {

  const response = error.response;
  let err;
  if (!response) {
    err = { message: 'It seems the server is offline.'};
  } else if (response.data.errors) {
    const fields = response.data.errors.reduce((acc, curr) => ({...acc, [curr.field]: curr.defaultMessage}), {});
    err = { fields };
  } else {
    err = {message: response.data.message};
  }

  if (cb) cb(err);
}