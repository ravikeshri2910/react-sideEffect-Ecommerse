import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';

const CartButton = (props) => {

  const dispatch =  useDispatch()
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const cartVisible =()=>{
    dispatch(uiActions.cartVisible())
  }

  return (
    <button className={classes.button} onClick={cartVisible}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
