import React from 'react';
import Onezd from './Onezd';
import Footer from './Footer';
import './App.css';
import Counter from'./Counter';
import UserCard from'./UserCard';
import Button from'./Button';
import {useState} from'react';
import Threezd from './Threezd';
import Welcome from './Welcome';
import Sixzd from './Sixzd';
import Twozd from './Twozd';
import Title from './Title';
import List from './List';
import Fourzd from './Fourzd';
import Fivezd from './Fivezd';
import Sevenzd from './Sevenzd';
import Eightzd from './Eightzd';
import Ninezd from './Ninezd';
import Tenzd from './Tenzd';
import Individzd from './Individzd';


function App() {
  const [show, setShow] =useState(true);
  const list = ['яблоко', 'банан', 'небанан'];
 
  return (
    <div className="App">
      <Onezd />
      <p>Это ваше первое React-приложение.</p>
      {show ?  <Counter/> :<></>  }
      <button onClick={() => setShow(!show)}>
                показать
            </button>
            
      <UserCard name="Олег" age={24}/>
      {/* <Onezd buttontext = 'Click'/>     */}
    
      <Button name="некнопка"/>
      <Welcome name="Катюша"/>
      <Fourzd/>
      <Fivezd/>
      {show ?  <Sixzd /> :<></>  }
      <Twozd/>
      <Threezd />
      
      <Title name="я уже не могу"/>
      <List fruits={list}/>
      <Sevenzd/> 
      <Eightzd/> 
      <Ninezd/> 
      <Tenzd/> 
      <Footer />
      < Individzd/>
    </div>
  );
}
export default App;
