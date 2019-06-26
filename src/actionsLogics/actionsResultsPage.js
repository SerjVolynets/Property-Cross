import store from '../store';

export const onAddTokenObj = tokenObj => ({
  type: 'onAddTokenObj',
  tokenObj,
});

export const onClickToken = (index) => {
  const tokenObj = {
    src: store.getState().listings[index].img_url,
    price: store.getState().listings[index].price,
    dis: store.getState().listings[index].summary,
    index,
  };
  store.dispatch(onAddTokenObj(tokenObj));
  let arr = [];
  if (JSON.parse(localStorage.getItem('favorites')) == undefined) {
    localStorage.setItem('favorites', JSON.stringify(arr));
  }
};
