import './App.scss';
import React, { useState } from 'react';


function App() {
  const[colors, setColors] = useState([]);
  const[level, setLevel] = useState(3);
  const[light, setLight] = useState(0);
  let userColors =[];



  
  // random draw
  const handleDraw = e =>{
    e.preventDefault();
    e.target.disabled = true;
    let br = 0;
    
    let draw = setInterval(()=>{
      let random = Math.floor(Math.random()*4)+1;
      setLight(random);
      setColors(colors=>[...colors,random]);
      br++;

      if(br === level){
        clearInterval(draw);
      }
    },1000)

    setTimeout(()=>{
      setLight(0);
      e.target.disabled = false;
    },(1000*level)+1000);
  }


  // user draw
  const handleUserDraw = (e,value) =>{
    e.preventDefault();
    userColors.push(value);

    if(userColors.length === colors.length){

      if(userColors.every((el,index)=>el === colors[index])){
        alert("Congratulations!");
        setLevel(level+1);
        setColors([]);
        userColors=[];

      }else{
        alert("You Have Lost!")
        setLevel(3);
        setColors([]);
        userColors=[];
      }

    }
  }


  return (
    <section className="app">
      <h2 className='app__header'>Round: {level-2}</h2>
      <div className="app__box">
        <article className="app__box__field1" style={light===1?{opacity:"0.5"}:null} id={1} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
        <article className="app__box__field2" style={light===2?{opacity:"0.5"}:null} id={2} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
        <article className="app__box__field3" style={light===3?{opacity:"0.5"}:null} id={3} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
        <article className="app__box__field4" style={light===4?{opacity:"0.5"}:null} id={4} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
      </div>
      <button className='app__start' onClick={(e)=>handleDraw(e)}>start</button>
    </section>
  );
}

export default App;