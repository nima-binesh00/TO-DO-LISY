import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example({ show, handleClose, showtitel }) {
  const { name, title } = showtitel;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="custom-modal-content"
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="directoryName">
            <Form.Label className="mb-2">
              {name == "Delete"
                ? "this task will be deleted permanently"
                : "title"}
            </Form.Label>

            {name != "Delete" && (
              <Form.Control
                type="text"
                placeholder="Enter a directory name"
                className="p-2"
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {name == "Delete" ? (
          <Button
            variant="primary"
            onClick={handleClose}
            className="d-flex align-items-center gap-2 px-4"
            style={{
              backgroundColor: "#a3e7f3ff",
              border: "none",
            }}
          >
            <i className="bi bi-folder-plus"></i>
            Cancel
          </Button>
        ) : null}
        <Button
          variant="primary"
          onClick={handleClose}
          className="d-flex align-items-center gap-2 px-4"
          style={{
            backgroundColor: "#9b4dff",
            border: "none",
          }}
        >
          <i className="bi bi-folder-plus"></i>
          {name}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Example;
