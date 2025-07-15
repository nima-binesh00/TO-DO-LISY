import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TaskCard from "./Cards";
import HamburgerMenu from "./moball";
// import Form from "react-bootstrap/Form";
function Listtwo() {
  return (
    <div>
      <section className="w-100 d-flex mt-3 m-2 bgdark">
        <Form inline className="w-100 d-flex justify-content-between pe-2">
          <div className="w-25 d-flex gap-2">
            <HamburgerMenu />
            <Form.Control
              type="text"
              placeholder="Search"
              className="buttenww d-none d-md-inline-block"
            />
          </div>
          <div className="d-flex flex-column align-content-center flex-grow-1 ps-5  ms-5 flex-md-grow-0 ps-md-0">
            <h2 className=" d-md-none">TO-DO LIST</h2>
            <span className="d-block fasele">1403 , 5s , 77 </span>
          </div>
          <Button variant="primary" className="buttenww d-none d-md-block btb">
            Add New Task
          </Button>
        </Form>
      </section>
      <section className="m-2 mt-3">
        <Form.Control
          type="text"
          placeholder="Search"
          className="w-100 d-md-none"
        />
        <div className="fs-3 w-100 text-center text-md-start pt-2">
          Main`s Task (3)
        </div>
      </section>
      <section className="d d-flex justify-content-between m-2 boderbutten pb-2">
        <article className="d-flex gap-2 fs-5 ">
          <i class="bi bi-list-ol"></i> <i class="bi bi-bounding-box"></i>
        </article>
        <Form.Select aria-label="Default select example" className="wits">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </section>
      <section className="mt-4 ">
        <Row className="d-flex row-gap-5 flex-wrap h-100">
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <TaskCard />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Listtwo;
