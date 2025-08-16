import React from 'react';
import { Row, Col } from "react-bootstrap";
import {  FaArrowDown } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { MdOutlineViewDay } from "react-icons/md";
import { BiLayer } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import {  FiSearch } from "react-icons/fi";
import LeadSummary from '../components/LeadSummary';
import List from '../components/List';
import NewLeadModal from '../components/NewLeadModal';
function Landing() {
    return (
        <div className="p-3" style={{ backgroundColor: "#f3f3f3", minHeight: "92vh" }}>
            <Row className="mx-2 align-items-start align-items-md-center mb-3 border-bottom">
                <Col xs={12} md={9} className="mb-3">
                    <h4 className="mb-1">Leads Management</h4>
                    <span className="text-muted">
                        Organize leads and track their progress effectively here
                    </span>
                </Col>
                <Col xs={12} md={3} className="d-flex justify-content-md-end gap-2 ">
                    <NewLeadModal/>
                    <button className="btn btn-light border d-flex align-items-center gap-1 m-1">
                        <FaArrowDown /> Exports
                    </button>
                </Col>
            </Row>
           <LeadSummary/>
            <Row className="mx-2 align-items-center justify-content-between mb-3 gap-2 flex-wrap">
                <Col xs="auto" className="d-flex gap-2 flex-wrap">
                    <button className="btn bg-white border d-flex align-items-center gap-1">
                        <CiFilter /> Filter
                    </button>
                    <button className="btn bg-white border d-flex align-items-center gap-1">
                        <BiLayer /> Bulk Action
                    </button>
                    <button className="btn bg-white border d-flex align-items-center gap-1">
                        <TfiReload /> 
                    </button>
                </Col>
                <Col xs="auto" className="d-flex align-items-center gap-2 flex-wrap">
                    <div className="d-flex align-items-center  rounded p-1 bg-white">
                        <FiSearch className="me-1" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-0 outline-none search-input-expand"
                        />
                    </div>
                    <button className="btn bg-white border d-flex align-items-center gap-1">
                        <MdOutlineViewDay /> View
                    </button>
                </Col>
            </Row>
            <List/>
        </div>
    );
}

export default Landing;
