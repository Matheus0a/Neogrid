// import React, { useState } from 'react';
// import Modal from 'react-modal';
//
// const ProductModal = ({ isOpen, onClose, onSubmit }) => {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');
//     const [available, setAvailable] = useState(true);
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newProduct = {
//             name,
//             description,
//             price,
//             available_to_buy: available,
//         };
//         onSubmit(newProduct);
//         onClose();
//         setName('');
//         setDescription('');
//         setPrice('');
//         setAvailable(true);
//     };
//
//     return (
//         <Modal isOpen={isOpen} onRequestClose={onClose}>
//             <h2>Adicionar Produto</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Nome:</label>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
