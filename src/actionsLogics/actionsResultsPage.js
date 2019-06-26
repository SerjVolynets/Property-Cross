import store from '../store';
import { onAddFavor } from './actionsPropertyDetails';

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
  store.dispatch(onAddFavor(JSON.parse(localStorage.getItem('favorites'))));
};
