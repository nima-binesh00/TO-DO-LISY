import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CustomDropdown from "./Dropdown";
function NavList({ name, path }) {
  return (
    <NavLink
      to={path}
      style={({ isActive }) =>
        isActive
          ? {
              border: "solid #8400ffff 3px",
              boxShadow: "0 0 10px #8a2be2, 0 0 20px #8a2be2 ",
            }
          : undefined
      }
      className="w-100 ps-2 p-2 text-decoration-none rounded-3"
    >
      {name}
    </NavLink>
  );
}
function List() {
  return (
    <>
      <section className="d-flex flex-column align-items-center p-4 gap-2 mb-4 bgdark">
        <h1 className="fs-5">TO-DO LIDT</h1>
        <Button variant="primary" className="w-100 btb">
          Add New Task
        </Button>
      </section>
      <section className="d-flex flex-column p-3 bgdark">
        <NavList name={"All tasks"} path={"/"} />
        <NavList name={"Importaed tasks"} path={"/Importaed"} />
        <NavList name={"Completed tasks"} path={"/Completed"} />
        <NavList name={"Uncompleted tasks"} path={"/Uncompleted"} />
        <CustomDropdown />
      </section>
    </>
  );
}

export default List;
