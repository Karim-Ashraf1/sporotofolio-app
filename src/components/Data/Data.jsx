import React from "react";

export var name = "";


export const getName = () => {
  return localStorage.getItem("name") || "Zeyad Waleed";
};

export const setName = (newName) => {
  localStorage.setItem("name", newName);
  name = newName;
};

const DataComponent = () => {
    return (
        <div/>
    );
};

export default DataComponent;
