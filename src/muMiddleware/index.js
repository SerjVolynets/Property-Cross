
function request(url, method) {
  return fetch(url, {
    method: method,
  })
    .then(response => response.json());
}
const thunk2 = () => next => (action) => {
  if (action.payload.url === undefined) {
    return next(action);
  }
  request(action.payload.url, action.payload.method)
    .then((data) => {
      console.log(data);
      return next({
        type: 'SUCCESS',
        payload: data.response,
      });
    })
    .catch(() => {
      return next({
        type: 'ERROR',
        payload: 'REQUEST_ERROR',
      });
    });
};

export default thunk2;
