import React from 'react'

const Shop = () => {
  return (
    <div>Shop</div>
  )
}

export default Shop

// import { ProductCart } from '..'
// import { Cart } from '../../hooks/useCart';
// import { On_Change, Product } from '../../models/shop.interfaces'

// interface Props {
//     products: Product[];
//     cart: Cart;
//     handleChange: (Props:On_Change) => void;
// }

// const Shop = ({products, cart, handleChange}:Props) => {
//   return (
//       <>
//         <div style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//         }}>
//             {
//                 products.map(product => (
//                     <ProductCart
//                         onChange={handleChange}
//                         counter={cart[product.id]?.counter || 0}
//                         key={product.id}
//                         product={product}
//                         className='dark'
//                         style={{
//                             backgroundColor: '#333'
//                         }}
//                     >
//                         <ProductCart.Img className='custom-img' />
//                         <ProductCart.Title className='text-white' />
//                         <ProductCart.Btns className='text-white' />
//                     </ProductCart>
//                 ))
//             }
//         </div>
        
//         <div className='product-cart-aside'>
//           {
//               Object.entries(cart).map(([key, value]) => (
//                 <ProductCart
//                   onChange={handleChange}
//                   counter={value.counter}
//                   key={key}
//                   product={value}
//                   className='dark'
//                   style={{
//                     backgroundColor: '#333',
//                     width: '100px',
//                   }}
//                 >
//                   <ProductCart.Img className='custom-img' />
//                   <ProductCart.Btns className='text-white' />
//                 </ProductCart>
//             ))
//           }
//         </div>
//       </>
//   )
// }

// export default Shop