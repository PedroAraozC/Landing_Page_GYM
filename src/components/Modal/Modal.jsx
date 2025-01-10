import React, { useState } from "react";
import "./Modal.css";
import { Form, Button, Modal as BootstrapModal } from "react-bootstrap";

const Modal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
    domicilio: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
    domicilio: "",
  });

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.nombre.trim()) {
      formErrors.nombre = "El nombre es obligatorio";
      isValid = false;
    }
    if (!formData.apellido.trim()) {
      formErrors.apellido = "El apellido es obligatorio";
      isValid = false;
    }
    if (!formData.email.trim()) {
      formErrors.email = "El email es obligatorio";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email inválido";
      isValid = false;
    }
    if (!formData.telefono.trim()) {
      formErrors.telefono = "El teléfono es obligatorio";
      isValid = false;
    } else if (formData.telefono.length < 10) {
      formErrors.telefono = "El teléfono debe tener al menos 10 dígitos";
      isValid = false;
    }
    if (!formData.dni.trim()) {
      formErrors.dni = "El DNI es obligatorio";
      isValid = false;
    } else if (formData.dni.length !== 8) {
      formErrors.dni = "El DNI debe tener 8 dígitos";
      isValid = false;
    }
    if (!formData.domicilio.trim()) {
      formErrors.domicilio = "El domicilio es obligatorio";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Formulario enviado correctamente");
      // Aquí puedes hacer el registro o la llamada a la API
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        dni: "",
        domicilio: "",
      });
      setErrors({});
      setOpen(false); // Cierra el modal después de enviar
    }
  };

  return (
    <BootstrapModal
      show={open}
      onHide={handleClose}
      centered
      aria-labelledby="modal-title"
    >
      <BootstrapModal.Header>
        <BootstrapModal.Title id="modal-title">
          ¡Gracias por tu mensaje!
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <p className="modal-text">
          Nos pondremos en contacto contigo a la brevedad.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre/s</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              isInvalid={!!errors.nombre}
            />
            <Form.Control.Feedback type="invalid">
              {errors.nombre}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formApellido">
            <Form.Label>Apellido/s</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Escribe tu apellido"
              value={formData.apellido}
              onChange={handleChange}
              isInvalid={!!errors.apellido}
            />
            <Form.Control.Feedback type="invalid">
              {errors.apellido}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="number"
              name="telefono"
              placeholder="1123456789"
              value={formData.telefono}
              onChange={handleChange}
              isInvalid={!!errors.telefono}
            />
            <Form.Control.Feedback type="invalid">
              {errors.telefono}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formDNI">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="number"
              name="dni"
              placeholder="99999999"
              value={formData.dni}
              onChange={handleChange}
              isInvalid={!!errors.dni}
            />
            <Form.Control.Feedback type="invalid">
              {errors.dni}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formDomicilio">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              type="text"
              name="domicilio"
              placeholder="Escribe tu dirección"
              value={formData.domicilio}
              onChange={handleChange}
              isInvalid={!!errors.domicilio}
            />
            <Form.Control.Feedback type="invalid">
              {errors.domicilio}
            </Form.Control.Feedback>
          </Form.Group>
          <div className="w-75 d-flex" >
            <BootstrapModal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </BootstrapModal.Footer>
          </div>
        </Form>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;
