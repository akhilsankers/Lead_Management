import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
function NewLeadModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="btn btn-primary d-flex align-items-center gap-1 m-1" onClick={handleShow} >
                <FaPlus /> New Leads
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Lead</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="px-2">
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Lead ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter lead ID" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Company</Form.Label>
                            <Form.Control type="text" placeholder="Enter company name" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone number" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Value</Form.Label>
                            <Form.Control type="number" placeholder="Enter value" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Tags</Form.Label>
                            <Form.Control type="text" placeholder="Enter tags" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Source</Form.Label>
                            <Form.Control type="text" placeholder="Enter source" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Assigned To</Form.Label>
                            <Form.Control type="text" placeholder="Assigned ID" className="rounded-pill" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Status</Form.Label>
                            <Form.Select className="rounded-pill">
                                <option value="">Select Status</option>
                                <option value="Customer">Customer</option>
                                <option value="Qualified">Qualified</option>
                                <option value="Working">Working</option>
                                <option value="Contacted">Contacted</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Created Date</Form.Label>
                            <Form.Control type="date" className="rounded-pill" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NewLeadModal