import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProduct } from '../features/product';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../views/Loading';


export default function Product() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product);
    const isProductLoading = useSelector(state => state.product.isProductLoading);
    const requestButtonName = useSelector(state => state.product.requestButtonName);
    let params = useParams();
    let { id } = params;

    useEffect(() => {
        dispatch(getProduct(id));
    }, [dispatch, id]);

    function productRequestHandler(event) {
        event.preventDefault();
        dispatch(getProduct(id));
    }

    return (
                <div className="container">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">{ product.name }</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">{ product.price }</h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>{ product.content }</li>
                            </ul>
                            <button type="button"
                                    className="btn btn-primary m-1"
                                    onClick={productRequestHandler}>
                                    <Loading status={ isProductLoading } title={ requestButtonName } />
                            </button>
                        </div>
                    </div>
                </div>
    )
}