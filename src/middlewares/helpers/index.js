export default string => ({
  request: {
    type: `${string}_REQUEST`,
  },
  success: {
    type: `${string}_SUCCESS`,
  },
  failure: {
    type: `${string}_FAILURE`,
    payload: 'REQUEST_ERROR',
  },
});
