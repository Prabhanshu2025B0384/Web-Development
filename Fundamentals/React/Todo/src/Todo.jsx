import React, { useState } from 'react';

function Todo() {
    const [itemList, setItemList] = useState([
        { text: "suka blyat", done: false },
        { text: "Hola amigo biches", done: false }
    ]);
    const [input, setInput] = useState("");

    const Add = () => {
        if (input.trim() === "") return;
        setItemList([...itemList, { text: input, done: false }]);
        setInput("");
    };

    const deleteItem = (indexToDelete) => {
        const newList = itemList.filter((_, index) => index !== indexToDelete);
        setItemList(newList);
    };

    const toggleDone = (indexToToggle) => {
        const newList = itemList.map((item, index) =>
            index === indexToToggle ? { ...item, done: !item.done } : item
        );
        setItemList(newList);
    };

    const checkedImg = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
    const uncheckedImg = "https://cdn-icons-png.flaticon.com/512/1828/1828665.png";

    const listItems = itemList.map((item, index) => (
        <li key={index}>
            <img
                src={item.done ? checkedImg : uncheckedImg}
                alt="check"
                onClick={() => toggleDone(index)}
                style={{ width: "20px", cursor: "pointer", marginRight: "10px" }}
            />
            <span style={{ textDecoration: item.done ? "line-through" : "none" }}>
                {item.text}
            </span>
            <button onClick={() => deleteItem(index)}>Delete</button>
        </li>
    ));

    return (
        <>
            <h1>Todo List</h1>
            <input 
                type="text" 
                placeholder="Add the task here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={Add}>Add</button>
            <ul>{listItems}</ul>
        </>
    );
}

export default Todo;