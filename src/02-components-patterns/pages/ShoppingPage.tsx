import { useCart } from '../hooks/useCart';
import Shop from '../components/Shop/Shop';
import { products } from '../data/products';

import '../styles/modo.css'

const ShoppingPage = () => {
  
  const { cart, handleChange } = useCart();
  
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />

        <Shop 
          products={products}
          cart={cart}
          handleChange={handleChange}
        />
    </div>
  )
}

export default ShoppingPage;

