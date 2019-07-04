import helper from './helpers/index';

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
  const objActions = helper(action.type);
  next(objActions.request);
  request(action.url, action.method)
    .then((data) => {
      objActions.success.payload = data.response;
      return next(objActions.success);
    })
    .catch(() => next(objActions.failure));
};

export default middlewareForRequest;
