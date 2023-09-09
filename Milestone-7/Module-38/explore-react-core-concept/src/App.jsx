import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Khan'];

  const books = [
    {id: 1, name: 'Physics', price: 100},
    {id: 2, name: 'Math', price: 120},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150}
  ]

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvo Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28},
]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo 
        task='Learn React' 
        isDone={true}>
      </Todo>
      <Todo 
        task='Core concept' 
        isDone={false}>
      </Todo>
      <Todo 
        task='Try JSX' 
        isDone={true}>
      </Todo> */}
      {/* <Device name="Laptop" price="10000"></Device>
      <Person></Person>
      <Student grade="7" score='99'></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const Person = {name:'sakib', age: 12}
  return <h3>I am {Person.name} with age: {age + money}</h3>
}

// eslint-disable-next-line no-unused-vars
const {grade, score} = {grade: '7', score: '99'};

function Student(grade, score){
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>Class: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '10px',
    border: '2px solid purple',
    borderRadius: '20px'
  }

  return (
    <div style={developerStyle}>
      <h5>Devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
