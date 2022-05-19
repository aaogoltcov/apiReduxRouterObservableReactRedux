import { ofType } from 'redux-observable';
import { tap, map, switchMap, retry, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { store } from '../store';
import { setProductList, setIsProductListLoading, setRequestButtonName, setIsProductListLoadingError } from '../features/productList';

export const getProductList = (action$, state$) => action$.pipe(
    ofType('productList/getProductList'),
    tap(() => {
        store.dispatch(setIsProductListLoading(true));
        store.dispatch(setRequestButtonName('Загружаю список продуктов...'));
    }),
    switchMap(() => ajax.getJSON(`http://localhost:7070/api/services`)
    .pipe(
        retry(10),
        map(productList => store.dispatch(setProductList(productList))),
        tap(() => {
            store.dispatch(setIsProductListLoading(false));
            store.dispatch(setIsProductListLoadingError(false));
            store.dispatch(setRequestButtonName('Запросить список продуктов снова?'));
        }),
        catchError(error => {
            console.log(error);
            store.dispatch(setIsProductListLoadingError(true));
            store.dispatch(setRequestButtonName('Не смог загрузить список продуктов, попробовать снова?'));
        }),
    ))
)