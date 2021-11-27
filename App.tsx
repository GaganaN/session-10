import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: "Apple",
    num: "2",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Mango",
    num: "10",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getTitle() {
  return "Fruits shopping List";
}

function App() {
  return (
    <div className="container">
      <h1>{getTitle()}</h1>
      <label htmlFor="search">Search</label>
      <input id="search" />
      <div className="heading">
          <span>Fruit name</span>
          <span>Requirement</span>
        </div>
      {list.map((item) => (
        <div>
          <span>{item.title}</span>
          <span>{item.num}</span>
        </div>
      ))}
    </div>
  );
}
export default App;
