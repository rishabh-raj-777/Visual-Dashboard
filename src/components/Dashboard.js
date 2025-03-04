import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartComponent from "./ChartComponent";
import Filters from "./Filters";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data") // Fetch data from Flask API
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container fluid className="dashboard">
      <Row>
        {/* Sidebar Filters */}
        <Col md={3} className="sidebar">
          <Filters data={data} setFilteredData={setFilteredData} />
        </Col>

        {/* Main Content Area */}
        <Col md={9} className="content">
          <h2 className="text-center mb-4">📊 Data Visualization Dashboard</h2>

          {/* Statistics Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <h5>Total Records</h5>
                  <h3>{data.length}</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <h5>Unique Topics</h5>
                  <h3>{new Set(data.map((item) => item.topic)).size}</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <h5>Countries Covered</h5>
                  <h3>{new Set(data.map((item) => item.country)).size}</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Charts */}
          <ChartComponent data={filteredData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
