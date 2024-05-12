import { useState } from 'react';
import data from './data'
import List from './List';


// const a = data.map( person => 
//     [<h3>{person.age}</h3>, 
//      <img src = {person.image} width="200" />, 
//      <h3>{person.name}</h3>] )

// const App = () => {
//   return (
//     <>
//     {a}
//     <button><h2>clear</h2></button>
//     </>    
//   )    

// const App = () => {
//   const [person, setPerson] = useState(data)
//   const clearAll = () => {setPerson([])}
//   return (
//     <>
//     <div className='container'>
//     {person.map((p)=>[<h3>{p.age}</h3>, <img src = {p.image} width="200" />, <h3>{p.name}</h3>])}
//     </div>
//     <button onClick={clearAll}> clear all </button>
//     </>    
//   )    
// };

const App = () => {
  const [person, setPerson] = useState(data)
  const clearAll = () => {setPerson([])}
  return (
    <>
      <main>
        <div className='container'>
          <List person = {person} /> 
        </div>
      </main>
      <button className='btn' onClick={clearAll}> clear all </button>
    </>    
  )    
};

export default App;
