import * as types from '../types';

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
  next({ type: types.ACTION_REQUEST.startRequest });
  request(action.url, action.method, action.headers, action.body)
    .then((data) => {
      return next({
        type: types.ACTION_REQUEST.successRequest,
        payload: data.response,
      });
    })
    .catch(() => next({ type: types.ACTION_REQUEST.errorRequest }));
};

export default middlewareForRequest;
