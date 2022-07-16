import './App.scss';
import React, { useState } from 'react';


function App() {
  const[colors, setColors] = useState([]);
  const[level, setLevel] = useState(3)


  // random draw
  const handleDraw = e =>{
    e.preventDefault();
    let br = 0;
    
    let draw = setInterval(()=>{
      let random = Math.floor(Math.random()*4)+1;
      setColors(colors=>[...colors,random]);
      br++;

      if(br === level){
        clearInterval(draw)
      }
    },1000)
  }


console.log(colors);
  return (
    
    <section className="app">
      <div className="app__box">
        <article className="app__box__field1"></article>
        <article className="app__box__field2"></article>
        <article className="app__box__field3"></article>
        <article className="app__box__field4"></article>
      </div>
      <button onClick={(e)=>handleDraw(e)}>start</button>
    </section>

  );
}

export default App;