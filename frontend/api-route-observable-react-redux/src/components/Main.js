import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getProductList } from "../features/productList";
import Loading from '../views/Loading';
import { Link } from 'react-router-dom';

export default function Main() {
    const productList = useSelector(state => state.productList.productList);
    const isProductListLoading = useSelector(state => state.productList.isProductListLoading);
    const requestButtonName = useSelector(state => state.productList.requestButtonName);
    const dispatch = useDispatch();
    
    function productListRequestHandler(event) {
        event.preventDefault();
        dispatch(getProductList());
    }

    return (
        <>
            <button type="button"
                    className="btn btn-primary m-1"
                    onClick={productListRequestHandler}>
                <Loading status={ isProductListLoading } title={ requestButtonName } />
            </button>
            <ul className="list-group">
                {productList.map(product => {
                    return <Link 
                        key={ product.id } 
                        to={ "product/" + product.id } 
                        className="list-group-item list-group-item-action">{ product.name }</Link>
                })}
            </ul>
        </>
    )
}