import React, { useState } from "react";
import { Card, Badge } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Example from "./Modal";

function TaskCard() {
  const [isStarred, setIsStarred] = useState(true);
  const [isCompleted, setIsCompleted] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleStar = () => {
    setIsStarred((prev) => !prev);
  };

  const toggleCompleted = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <Card
      className="position-relative shadow-sm border-0 "
      style={{ borderRadius: "1rem", backgroundColor: "#edf1f7" }}
    >
      <Badge className="position-absolute toop end-0 m-2 px-3 py-1 btbgr">
        Main
      </Badge>

      <Card.Body className="bgdarkblue borderred">
        <Card.Title className="fw-bold">Task 2</Card.Title>
        <Card.Text className=" mb-4">
          This is the description for this task
        </Card.Text>

        <div className="d-flex align-items-center gap-2 text-muted mb-3">
          <i className="bi bi-calendar"></i>
          <small>05/15/2023</small>
        </div>

        <hr className="my-3" />

        {/* Footer controls */}
        <div className="d-flex align-items-center justify-content-between">
          <Badge
            bg={isCompleted ? "success" : "secondary"}
            className="px-3 py-2 gradntcomplet"
            style={{
              borderRadius: "999px",
              fontSize: "0.8rem",
              cursor: "pointer",
            }}
            onClick={toggleCompleted}
          >
            {isCompleted ? "completed" : "uncompleted"}
          </Badge>

          <div className="d-flex align-items-center gap-3">
            <i
              className={`bi ${
                isStarred
                  ? "bi-star-fill text-danger"
                  : "bi-star text-secondary"
              }`}
              style={{ cursor: "pointer" }}
              onClick={toggleStar}
            ></i>
            <i
              className="bi bi-trash icongr"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowModal(true);
              }}
            ></i>
            <i className="bi bi-three-dots" style={{ cursor: "pointer" }}></i>
          </div>
        </div>
      </Card.Body>
      <Example
        show={showModal}
        showtitel={{
          name: "Delete",
          title: "Are you sure ? ",
        }}
        handleClose={() => setShowModal(false)}
      />
    </Card>
  );
}

export default TaskCard;
