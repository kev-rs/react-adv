import { ProductBtns, ProductImg, ProductTitle, ProductCart } from '../components/index';

const product = {
  id: '1',
  title: 'Coffe Mug - 2',
  img: "./coffee-mug.png",
}

const ShoppingPage = () => {
  

  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          <ProductCart product={product}>
            <ProductCart.Img />
            <ProductCart.Title />
            <ProductCart.Btns />
          </ProductCart>

          <ProductCart product={product}>
            <ProductImg />
            <ProductTitle />
            <ProductBtns />
          </ProductCart>
        </div>
    </div>
  )
}

export default ShoppingPage;