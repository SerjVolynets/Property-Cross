function request(url, method = 'GET', headers, body) {
  return fetch(url, {
    method,
    headers,
    body,
  })
    .then(response => response.json());
}
const middlewareForRequest = () => next => (action) => {
  if (action.url === undefined) {
    return next(action);
  }
  next({ type: action.type.REQUEST });
  request(action.url, action.method, action.headers, action.payload)
    .then((data) => {
      return next({
        type: action.type.SUCCESS,
        payload: data.response,
      });
    })
    .catch(error => next({ type: action.type.FAILURE, payload: error }));
};

export default middlewareForRequest;
