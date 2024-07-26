
import { Modal, Button, Form } from 'react-bootstrap';

const EditModal = ({ show, vehicles, setVehicles, handleClose, setCurrentItem, item, setShowModal }) => {
  console.log(item);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("cominggg...");
    setCurrentItem(prev => ({ ...prev, [name]: value }));
  };

  
  const handleSave=async () => {
    const response = await fetch("/api/admin/edit-vehicle",{
      method: "PUT",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        id:item._id,
        name:item.name,
        description:item.description,
        price:item.price,
        image:item.image,
        manufacture:item.manufacture,
        model:item.model
      })
    })
    const data = await response.json();
    if(data.status){
      vehicles = vehicles.map((vehicle)=>{
        if(vehicle._id == data.vehicle._id ){
          return data.vehicle;
        }
        return vehicle
      })
      console.log("vehicles", vehicles);
      setVehicles(vehicles)
        setShowModal(false)
    }
    
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={item.name || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formModel">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={item.model || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={item.price || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formManufacture">
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type="text"
              name="manufacture"
              value={item.manufacture || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={item.image || ''}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
