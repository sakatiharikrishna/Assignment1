
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Layout/Header';
import SideMenu from '../Layout/SideMenu';
import TableComponent from '../shared/TableComponent';
import TailLinkComponent from '../shared/TailLinkComponent';


function MainComponent() {
    return (
        <>

            <Row style={{ margin: "0px" }}>
                <Col xs={3} md={3} style={{ padding: "0px" }}>
                    <SideMenu />
                </Col>
                <Col xs={9} md={9}>
                    <Header />
                    <TailLinkComponent />
                    <TableComponent />

                </Col>

            </Row>


        </>
    );
}

export default MainComponent;