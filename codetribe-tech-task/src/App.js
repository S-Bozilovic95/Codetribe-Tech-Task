import './App.scss';
import React, { useState } from 'react';


function App() {
  const[colors, setColors] = useState([]);
  const[level, setLevel] = useState(3);
  const[light, setLight] = useState(0);
  const[userColors,setUserColors] = useState([]);

  // random draw
  const handleDraw = e =>{
    e.preventDefault();
    let br = 0;
    
    let draw = setInterval(()=>{
      let random = Math.floor(Math.random()*4)+1;
      setLight(random)
      setColors(colors=>[...colors,random]);
      br++;

      if(br === level){
        clearInterval(draw)
      }
    },1000)
  }


  // user draw
  const handleUserDraw = (e,value) =>{
    e.preventDefault();
    setUserColors(userColors=>[...userColors,value]);

    if(userColors.length === colors.length){

      if(userColors.every((el,index)=>el === colors[index])){
        alert("Congrtultions!");
        setLevel(level+1);
        setColors([]);
        setUserColors([]);
      }else{
        alert("You Have Lost!")
        setLevel(3);
        setColors([]);
        setUserColors([]);
      }

    }
  }


  console.log(colors,userColors);

  return (
    <section className="app">
      <div className="app__box">
        <article className="app__box__field1" style={light===1?{opacity:"0.5"}:null} id={1} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
        <article className="app__box__field2" style={light===2?{opacity:"0.5"}:null} id={2} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
        <article className="app__box__field3" style={light===3?{opacity:"0.5"}:null} id={3} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
        <article className="app__box__field4" style={light===4?{opacity:"0.5"}:null} id={4} onClick={(e)=>handleUserDraw(e,Number(e.target.id))}></article>
      </div>
      <button onClick={(e)=>handleDraw(e)}>start</button>
    </section>
  );
}

export default App;