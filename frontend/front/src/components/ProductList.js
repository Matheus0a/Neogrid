// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// const ProductList = ({ products, onDelete }) => {
//     return (
//         <div>
//             <h2>Lista de Produtos</h2>
//             {products.map((product) => (
//                 <div key={product.id}>
//                     <p>{product.name}</p>
//                     <p>{product.description}</p>
//                     <p>{product.price}</p>
//                     <p>{product.available_to_buy ? 'Disponível' : 'Indisponível'}</p>
//                     <button onClick={() => onDelete(product.id)}>Remover</button>
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default ProductList;
