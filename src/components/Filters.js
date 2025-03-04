import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Filters = ({ data, setFilteredData }) => {
  const [selectedYear, setSelectedYear] = useState("");

  const applyFilter = () => {
    let filtered = data;
    if (selectedYear) {
      filtered = filtered.filter(
        (item) => item.year.toString() === selectedYear
      );
    }
    setFilteredData(filtered);
  };

  return (
    <div className="p-3 border rounded">
      <h5>Filters</h5>
      <Form>
        <Form.Group>
          <Form.Label>Year</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {[...new Set(data.map((item) => item.year))].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" className="mt-3" onClick={applyFilter}>
          Apply Filter
        </Button>
      </Form>
    </div>
  );
};

export default Filters;
