import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./index.css";

let TodoApp = () => {
  let [TodoValue, setTodoValue] = useState("");
  let [TodoList, setTodoList] = useState([]);
  let [TodoUpdate, setTodoUpdate] = useState("");

  let HandleChange = (e) => {
    setTodoValue(e.target.value);
    console.log(e.target.value);
  };

  let HandleSubmit = (e) => {
    e.preventDefault();
    if (TodoValue !== "") {
      setTodoList([...TodoList, TodoValue]);
    }
    setTodoValue("");
  };

  let HandleDelete = (index, value) => {
    let DeleteList = TodoList.filter((val) => val !== value);
    setTodoList(DeleteList);
  };

  let HandleEdit = (index) => {
    // e.preventDefault()
    let InputForm = document.getElementsByClassName("inputForm");
    let ButtonData = document.getElementsByClassName("button");
    if (index <= TodoList.length) {
      InputForm[index].style.visibility = "visible";
      ButtonData[index].style.visibility = "visible";
    }
  };
  let HandleEditChange = (e) => {
    setTodoUpdate(e.target.value);
  };

  let HandleUpdate = (index, value) => {
    console.log(index);
    // e.preventDefault()
    // e.stopImmediatePropagation()
    if (TodoUpdate !== "") {
      let UpdateList = TodoList.map((val) =>
        val === value ? TodoUpdate : val
      );
      console.log(UpdateList);
      setTodoList([...UpdateList]);
    }

    let InputFormData = document.getElementsByClassName("inputForm");
    let ButtonDataList = document.getElementsByClassName("button");

    if (index <= TodoList.length) {
      InputFormData[index].style.visibility = "hidden";
      ButtonDataList[index].style.visibility = "hidden";
    }
  };

  let HandleCompleted = (index) => {
    let Complete = document.getElementsByClassName("Complete");

    if (index < TodoList.length) {
      Complete[index].style.textDecoration = "line-through";
    }
  };

  let HandleClear = () => {
    setTodoList([]);
  };

  let ListValues = TodoList.map((value, index) => (
    <li className="Complete" key={index}>
      {value}
      <Button variant="outline-warning" onClick={() => HandleCompleted(index)}>
        completed
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => HandleDelete(index, value)}
      >
        delete
      </Button>
      <Button variant="outline-dark" onClick={() => HandleEdit(index)}>
        edit
      </Button>

      <input
        style={{ visibility: "hidden" }}
        className="inputForm"
        type="text"
        placeholder="enter update list"
        onChange={HandleEditChange}
      />
      <Button
        variant="outline-light"
        style={{ visibility: "hidden" }}
        className="button"
        onClick={() => HandleUpdate(index, value)}
      >
        update
      </Button>
    </li>
  ));

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>todo app</h1>
      <div className="listData">
        <form>
          <input
            value={TodoValue}
            type="text"
            placeholder="enter todo items"
            onChange={HandleChange}
          />
          <Button variant="outline-success" onClick={HandleSubmit}>
            add items
          </Button>
          <Button variant="outline-danger" onClick={HandleClear}>
            Delete All items
          </Button>
        </form>
      </div>
      <div>
        <ul>{ListValues}</ul>
      </div>
    </>
  );
};
export default TodoApp;
