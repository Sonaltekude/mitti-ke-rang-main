import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

export const Donate = () => {
  const [showSuccess, setShowSuccess] = useState(false); 
  const [panError, setPanError] = useState(""); // State for PAN error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contribution: "",
    taxExemption: false,
    panCard: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "panCard") {
      setPanError(""); // Clear PAN error on change
    }
  };

  const validatePan = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN format regex
    return panRegex.test(pan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.taxExemption && !validatePan(formData.panCard)) {
      setPanError("Please enter a valid PAN card number (e.g., ABCDE1234F).");
      return; // Stop form submission if PAN is invalid
    }

    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        contribution: "",
        taxExemption: false,
        panCard: "",
      });
    }, 500); 
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2 className="text-center">DONATE</h2>

        <Row className="justify-content-center mt-4">
          <Col md={5}>
            <Form onSubmit={handleSubmit}>
             
              {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                  Donation successfully completed! Thank you for your contribution.
                </Alert>
              )}

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
                />
              </Form.Group>

              <Form.Group controlId="contribution">
                <Form.Label>Your Contribution</Form.Label>
                <Form.Control
                  type="number"
                  name="contribution"
                  value={formData.contribution}
                  onChange={handleChange}
                  placeholder="Enter Amount"
                  required
                />
              </Form.Group>

              <Form.Group controlId="taxExemption">
                <Form.Check
                  type="checkbox"
                  name="taxExemption"
                  checked={formData.taxExemption}
                  onChange={handleChange}
                  label="Need Tax Exemption - PAN is mandatory"
                />
              </Form.Group>

              {formData.taxExemption && (
                <Form.Group controlId="panCard" className="mb-4">
                  <Form.Label>PAN Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="panCard"
                    value={formData.panCard}
                    onChange={handleChange}
                    placeholder="Enter PAN Number"
                  />
                  {panError && <div className="text-danger mt-2">{panError}</div>} {/* Display PAN error */}
                </Form.Group>
              )}

              <Button variant="success" type="submit" className="button w-100 mt-3">
                Donate
              </Button>
            </Form>
          </Col>

          <Col md={5} className="text-left border-left pl-4">
            <h5>You can also transfer your contribution to NASIK MERCHANT CO-OP bank account.</h5>

            <p>
              <strong>MITTI KE RANG TRUST</strong>
              <br />
              Current Account.<br />
              Account 071100100000051<br />
              NASIK MERCHANT CO-OP BANK LTD BHOSARI (PUNE) BRANCH 381/1, GAVHANE VASTI, SADASHIV PALACE BHOSARI, PUNE. PUNE
              ,MAHARASHTR- 411026
              <br />
              IFSC code - NMCB0000072
              <br />
              MICR Code - 411369004
            </p>

            <p>
              Write to us at <a href="mailto:mittikerangfoundation@gmail.com">mittikerangfoundation@gmail.com</a> after transferring your
              contribution.
            </p>

            <p>
              <strong>MITTI KE RANG is FCRA certified</strong> and can receive donations from any country. FCRA bank details
              will be shared upon request.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};
