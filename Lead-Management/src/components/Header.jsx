import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FiAlignLeft, FiSearch } from "react-icons/fi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const [Screensize, setScreensize] = useState(window.innerWidth < 768);
  const [expanded, setExpanded] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreensize(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar
      expand="lg"
      className="px-3"
      style={{ backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <FiAlignLeft size={24} style={{ marginRight: "8px" }} />
          {Screensize ? (
            <div
              ref={searchRef}
              className={`search-circle ${expanded ? "expanded" : ""}`}
            >
              <FiSearch
                className="search-icon"
                onClick={() => setExpanded(true)}
                style={{ cursor: "pointer" }}
              />
              {expanded && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                  autoFocus
                />
              )}
            </div>
          ) : (
            <div className="search-wrapper">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input-expand"
              />
            </div>
          )}
        </div>

        <div className="d-flex align-items-center ms-auto gap-3">
          <HiOutlineBellAlert size={24} style={{ cursor: "pointer" }} />

          <div className="d-flex align-items-center gap-2">
            <Dropdown>
              <Dropdown.Toggle
                as="div"
                className="p-0 border-0 bg-transparent"
                id="dropdown-basic"
                style={{ cursor: "pointer" }}
              >
                <div className="position-relative">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                    alt="user"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#28a745",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">Account</Dropdown.Item>
                <Dropdown.Item href="#">Billing</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="d-flex flex-column" style={{ lineHeight: 1.2 }}>
              <span style={{ fontWeight: 500 }}>John</span>
              <span style={{ fontSize: "0.85rem", color: "#555" }}>
                email@domain.com
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
