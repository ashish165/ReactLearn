import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*const element=<h1 className="testClass">welcome to React Programming....</h1>;
ReactDOM.render(element,document.getElementById("root"));

const newelement=<h1 className="testClass">Understanding the Creation of Element</h1>;
// last render element insert 
ReactDOM.render(newelement,document.getElementById("root"));
*/
/*const element=(
  <div className="testClass">
     <h1>Heading 1</h1>
     <h2>Heading 2</h2>
  </div>
);
ReactDOM.render(element,document.getElementById("root"));
*/
/*
const element=React.createElement("div",null,"Hello World");
ReactDOM.render(element,document.getElementById("root"))
*/
const element=React.createElement("div",null,"Hello React JS");
ReactDOM.render(element,document.getElementById("root"));
