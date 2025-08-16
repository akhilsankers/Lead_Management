import { Row, Col } from "react-bootstrap";
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Landing from './Pages/landing';

function App() {
  return (
    <div className="full-height">
      <Row className="g-0 full-height">
        <Col xs="auto">
          <Sidebar />
        </Col>
        <Col className="scrollable-col">
          <Header />
          <Landing />
        </Col>
      </Row>
    </div>
  );
}

export default App;
