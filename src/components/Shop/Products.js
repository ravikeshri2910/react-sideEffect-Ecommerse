import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Product = [
  {
    id : 'p1',
    price : 6,
    title : 'Book',
    description : 'A good book'
  },
  {
    id : 'p2',
    price : 78,
    title : 'Cat',
    description : 'Wild cat'
  },
  {
    id : 'p3',
    price : 56,
    title : 'Bat',
    description : 'Cricket bat'
  },
  
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          Dummy_Product.map((product) =>{
            return (<ProductItem
            key = {product.id}
            id = {product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />)

          })
        }
      </ul>
    </section>
  );
};

export default Products;
