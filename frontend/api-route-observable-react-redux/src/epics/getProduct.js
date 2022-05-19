import { ofType } from 'redux-observable';
import { tap, map, switchMap, retry, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { store } from '../store';
import { setIsProductLoading, setIsProductLoadingError, setProduct, setRequestButtonName } from '../features/product';

export const getProduct = (action$, state$) => action$.pipe(
    ofType('product/getProduct'),
    tap(() => {
        store.dispatch(setIsProductLoading(true));
        store.dispatch(setRequestButtonName('Загружаю подукт...'));
    }),
    switchMap(() => ajax.getJSON(`http://localhost:7070/api/services/${state$.value.product.productId}`)
    .pipe(
        retry(10),
        map(product => store.dispatch(setProduct(product))),
        tap(() => {
            store.dispatch(setIsProductLoading(false));
            store.dispatch(setIsProductLoadingError(false));
            store.dispatch(setRequestButtonName('Загрузить продукт снова?'));
        }),
        catchError(error => {
            console.log(error);
            store.dispatch(setIsProductLoadingError(true));
            store.dispatch(setRequestButtonName('Не смог загрузить, попробовать снова?'));
        }),
    ))
)