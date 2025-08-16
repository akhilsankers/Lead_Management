import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import leads from '../assets/leads.json';
import { IoSquareOutline } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Pagination from 'react-bootstrap/Pagination';

function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(leads.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentLeads = leads.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const statuscolor = {
        "Customer": "success",
        "Qualified": "warning",
    };

    return (
        <div className="mx-3 mb-4 p-3 border rounded-3 bg-white table-responsive">
            <Table striped hover className="align-middle">
                <thead>
                    <tr>
                        <th><IoSquareOutline /></th>
                        <th>Lead Id</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Value</th>
                        <th>Tags</th>
                        <th>Source</th>
                        <th>Assigned</th>
                        <th>Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {currentLeads.map((lead, index) => (
                        <tr key={index}>
                            <td><IoSquareOutline /></td>
                            <td>{lead.id}</td>
                            <td className="text-primary fw-semibold">{lead.company}</td>
                            <td className="text-primary">{lead.email}</td>
                            <td className="text-primary">{lead.phone}</td>
                            <td>{lead.value}</td>
                            <td>{lead.tags}</td>
                            <td>{lead.source}</td>
                            <td>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={<Tooltip id={`tooltip-${lead.id}`}>{lead.assigned}</Tooltip>}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                                        alt={lead.assigned}
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </OverlayTrigger>
                            </td>
                            <td><Badge bg={statuscolor[lead.status] || "secondary"}>{lead.status}</Badge></td>
                            <td>{new Date(lead.created).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <Pagination className="m-0">
                    <Pagination.Prev
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{ color: "black" }}
                    >
                        Previous
                    </Pagination.Prev>
                </Pagination>

                <Pagination className="m-0">
                    {currentPage > 2 && (
                        <>
                            <Pagination.Item
                                onClick={() => handlePageChange(1)}
                                style={{ color: "black" }}
                            >
                                1
                            </Pagination.Item>
                            {currentPage > 3 && <Pagination.Ellipsis disabled />}
                        </>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(
                            (page) =>
                                page === currentPage ||
                                page === currentPage - 1 ||
                                page === currentPage + 1
                        )
                        .map((page) => (
                            <Pagination.Item
                                key={page}
                                active={page === currentPage}
                                onClick={() => handlePageChange(page)}
                                style={{ color: "black" }}
                            >
                                {page}
                            </Pagination.Item>
                        ))}

                    {currentPage < totalPages - 1 && (
                        <>
                            {currentPage < totalPages - 2 && <Pagination.Ellipsis disabled />}
                            <Pagination.Item
                                onClick={() => handlePageChange(totalPages)}
                                style={{ color: "black" }}
                            >
                                {totalPages}
                            </Pagination.Item>
                        </>
                    )}
                </Pagination>

                <Pagination className="m-0">
                    <Pagination.Next
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{ color: "black" }}
                    >
                        Next
                    </Pagination.Next>
                </Pagination>
            </div>
        </div>
    );
}

export default List;
