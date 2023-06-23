import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Button, Table, Modal, Form } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    available_to_buy: '',
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    available_to_buy: false,
  });

  const handleEditProduct = (product) => {
    setEditFormData(product);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      available_to_buy: false,
    });
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/produtos');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      available_to_buy: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const handleAddProduct = async () => {
    try {
      await axios.post('/api/produtos', formData);
      fetchProducts();
      handleCloseModal();
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/produtos/${productId}`);
      setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error('Erro ao remover produto:', error);
    }
  };
  const handleUpdateProduct = async () => {
    try {
      await axios.put(`/api/products/${editFormData.id}`, editFormData);
      fetchProducts();
      handleCloseEditModal();
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };
  <Modal show={showEditModal} onHide={handleCloseEditModal}>
    <Modal.Header closeButton>
      <Modal.Title>Editar Produto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formId">
          <Form.Label>ID</Form.Label>
          <Form.Control
              type="text"
              name="id"
              value={editFormData.id}
              onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={editFormData.description}
              onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Preço</Form.Label>
          <Form.Control
              type="text"
              name="price"
              value={editFormData.price}
              onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formAvailableToBuy">
          <Form.Check
              type="checkbox"
              label="Disponível para Compra"
              name="available_to_buy"
              checked={editFormData.available_to_buy}
              onChange={handleCheckboxChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseEditModal}>
        Fechar
      </Button>
      <Button variant="primary" onClick={handleUpdateProduct}>
        Atualizar
      </Button>
    </Modal.Footer>
  </Modal>


  return (
      <Container className="mt-4">
        <Button variant="primary" onClick={handleShowModal}>
          Adicionar Produto
        </Button>

        <Table striped bordered hover className="mt-4">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Disponível para Compra</th>
            <th>Ações</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.available_to_buy ? 'Sim' : 'Não'}</td>
                <td>
                  <Button
                      variant="danger"
                      onClick={() => handleDeleteProduct(product.id)}
                  >
                    Remover
                  </Button>
                  <Button variant="primary" onClick={() => handleEditProduct(product)}>
                    Editar
                  </Button>
                </td>
              </tr>
          ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Produto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formAvailableToBuy">
                <Form.Check
                    type="checkbox"
                    label="Disponível para Compra"
                    name="available_to_buy"
                    checked={formData.available_to_buy}
                    onChange={handleCheckboxChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button variant="primary" onClick={handleAddProduct}>
              Adicionar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
  );
}

export default App;
