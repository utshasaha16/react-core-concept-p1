import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {

  const actors = ["sakib", "shoriful raj", "jasim", "rubel", "salman shah"];

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 1, name: 'math', price: 110},
    {id: 1, name: 'chemistry', price: 120},
    {id: 1, name: 'biology', price: 150}
  ]

  const singers = [
    {id:1, name: 'Dr Mahafusur Rahman', age: 60},
    {id: 2, name: 'Eva Rahman', age: 30},
    {id: 3, name: 'shuvro Dev', age: 35},
    {id: 4, name: 'pritom vau', age: 28}
  ]

  return (
    <>
      <h1>React Core Concept part-1</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"bappa raj"}></Actor>

      {
        actors.map(actor => (<Actor name={actor}></Actor>
        ))
      }

      {/* 
      <Todo task="Learn React" isDone=
      {true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try Jsx" isDone= {true}></Todo> */}
      {/* <Device name='Laptop' price= '40000'></Device>
      <Device name='mobile' price= '25000'></Device>
      <Device name='watch' price= '3000'></Device>
      <Person></Person>
      <Student grade= '10' score= '90'></Student>
      <Student grade= '12' score= '99'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  return (
    <h2>
      this is device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 50;
  const person = { name: "sakib", age: 30 };
  return (
    <h3>
      I am a {person.name} with age: {age + money}
    </h3>
  );
}

function Student({ grade = 0, score = 0 }) {
  // const {grade, score} = props;
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h4>Junior Developer</h4>
      <p>Coding</p>
    </div>
  );
}

export default App;
