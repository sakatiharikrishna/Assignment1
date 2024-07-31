import Table from 'react-bootstrap/Table';
import { LuDownload } from "react-icons/lu";
import { Col, Row, Button } from 'react-bootstrap';
import { TbMobiledata } from "react-icons/tb";
import Card from 'react-bootstrap/Card';
import { MdOutlineFileDownload } from "react-icons/md";
import { HiFilter } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // This includes Popper.js
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoMdSearch } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

const headers = [
  { key: 'id', label: '#' },
  { key: 'asset', label: 'Asset' },
  { key: 'code', label: 'Code' },
  { key: 'department', label: 'Department' },
  { key: 'dateTime', label: 'Date&Time' },
  { key: 'downTime', label: 'DownTime' },
  { key: 'status', label: 'Status' },
  { key: 'report', label: 'Report' }

];


const data = [

  { id: 1, asset: 'Ge ECG Machine', code: 'AG-7645698 ', department: '	Blood Center', dateTime: '2024-07-01 08:00', downTime: '2 hours', status: 'Cleared', report: <LuDownload /> },
  { id: 2, asset: 'Ge ECG Machine', code: 'AG-7645698', department: '	Blood Center', dateTime: '2024-07-01 09:30', downTime: '1 hour', status: 'Open', report: <LuDownload /> },
  { id: 3, asset: 'Ge ECG Machine', code: 'AG-7645698', department: '	Blood Center', dateTime: '2024-07-01 11:00', downTime: '3 hours', status: 'Cleared', report: <LuDownload /> },
  { id: 4, asset: 'Ge ECG Machine', code: 'AG-7645698', department: '	Blood Center', dateTime: '2024-07-01 13:15', downTime: '30 minutes', status: 'Open', report: <LuDownload /> },
  { id: 5, asset: 'Ge ECG Machine', code: 'AG-7645698', department: '	Blood Center', dateTime: '2024-07-01 14:45', downTime: '45 minutes', status: 'Cleared', report: <LuDownload /> },
  { id: 6, asset: 'Ge ECG Machine', code: 'AG-7645698', department: '	Blood Center', dateTime: '2024-07-01 16:00', downTime: '1 hour', status: 'Cleared', report: <LuDownload /> }
];

function TableComponent() {



  const renderStatus = (value) => {
    if (value === 'Open') {
      return (<button type="button" class="btn btn-danger" style={{ float: "right", background: "#ff6b00", borderRadius: "38px", width: "100%", textAlign: "left" }}>{value}</button>);
    } else {
      return value;
    }
  }
  return (
    <div className='mt-3'>

      <Row>

        <Col xs={9} md={9} >
          <Card>
            <Card.Body style={{ padding: "5px" }}>
              <Row>

                <Col xs={4} md={4} >
                  <InputGroup size="sm" style={{ transform: "translateY(5px)" }}>
                    <InputGroup.Text id="inputGroup-sizing-sm"><IoMdSearch /></InputGroup.Text>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>

                </Col>
                <Col xs={3} md={3} >
                  <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </Col>
                <Col xs={3} md={3} >
                  <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                </Col>
                <Col xs={2} md={2} >
                  <div style={{ display: 'flex', transform: "translateY(5px)" }} >
                    <h5 style={{ right: "10px", bottom: "10px" }}><HiFilter /></h5>
                    <h5 style={{ right: "5px", bottom: "5px" }}><TbMobiledata /></h5>
                    <h5 style={{ right: "10px", bottom: "10px" }}><MdOutlineFileDownload /></h5>
                  </div>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} md={3} >
          <Card>
            <Card.Body style={{ padding: "5px" }}>
              <Button variant="primary" style={{ float: "right", background: "#4690ff", borderRadius: "38px" }}>Primary<IoIosAdd style={{ marginLeft: "10px", }} /></Button >{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Table responsive="sm">
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {headers.map(header => (
                <td key={header.key}>{header.key === 'status' ? renderStatus(item[header.key]) : item[header.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

}

export default TableComponent;
