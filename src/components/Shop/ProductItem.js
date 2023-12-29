import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {cartAction} from '../../store/cartSlice';

const ProductItem = (props) => {

  const dispatch = useDispatch()

  const { title, price, description ,id} = props;

  console.log(title , id)

  const addItemToCartHandler =() =>{
    dispatch(cartAction.addItemToCart({
      title,
      id,
      price
    }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
