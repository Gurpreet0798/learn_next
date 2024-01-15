import dynamic from "next/dynamic";
import React, { useState, useEffect, Fragment } from "react";

// get the local storage data back:-
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState(" ");
  const [toggleButton, setToggleButton] = useState(false);

  // add the items function:-
  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      setInputdata("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputdata("");
    }
  };

  // how to edit items section:-
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });
    setInputdata(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // how to delete items section:-
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove all the elements:-
  const removeAll = () => {
    setItems([]);
  };

  // adding local-storage so that on refresh all data does not goes away:-
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo"></img>
            <figcaption>Add your list here✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️Add item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputdata(event.target.value)}
            ></input>
            {/* toggle button */}
            {/* {toggleButton ? (
              <i
                className="fa-solid fa-pen-to-square add-btn"
                onClick={addItem}
              ></i>
            ) : (
              <i className="fa-solid fa-plus add-btn" onClick={addItem}></i>
            )} */}
            <i
              className="fa-solid fa-plus"
              style={{ fontSize: 18, marginRight: 15 }}
              onClick={addItem}
            ></i>
          </div>

          {/*Show all items*/}
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <Fragment key={curElem.id}>
                  <div className="eachItem">
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn">
                      <i
                        className="fa-solid fa-pen-to-square add-btn"
                        style={{ fontSize: 18 }}
                        onClick={() => editItem(curElem.id)}
                      ></i>
                      <i
                        className="fa-solid fa-trash add-btn"
                        style={{ fontSize: 18 }}
                        onClick={() => deleteItem(curElem.id)}
                      ></i>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>

          {/*Remove all buttons*/}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Todo), {
  ssr: false,
});
