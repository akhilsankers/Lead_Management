import React from 'react';
import { Row, Col } from "react-bootstrap";

function LeadSummary() {
  return (
    <Row className="mx-3 mb-4 border p-3 rounded-3 bg-white">
      <Col>
        <div className="text-muted mb-1">New</div>
        <div className="fw-bold">127</div>
      </Col>
      <Col>
        <div className="text-muted mb-1">Contacted</div>
        <div className="fw-bold">705k</div>
      </Col>
      <Col>
        <div className="text-muted mb-1">Qualified</div>
        <div className="fw-bold">249k</div>
      </Col>
      <Col>
        <div className="text-muted mb-1">Working</div>
        <div className="fw-bold">57k</div>
      </Col>
      <Col>
        <div className="text-muted mb-1">Proposal Sent</div>
        <div className="fw-bold">1.1k</div>
      </Col>
      <Col>
        <div className="text-success mb-1">Customer</div>
        <div className="fw-bold">3.7k</div>
      </Col>
      <Col>
        <div className="text-danger mb-1">Lost Leads</div>
        <div className="fw-bold">5.2k</div>
      </Col>
    </Row>
  );
}

export default LeadSummary;
