import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Counter from'./Counter';
import UserCard from'./UserCard';
import Button from'./Button';
import {useState} from'react';
import FormElement from './FormElement';
import Welcome from './Welcome';
import Chetchik from './Chetchik';
import Form from './Form';
import Title from './Title';
import List from './List';

function App() {
  const [show, setShow] =useState(true);
  const list = ['яблоко', 'банан', 'небанан'];
 
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      {show ?  <Counter/> :<></>  }
      <button onClick={() => setShow(!show)}>
                показать
            </button>
      <UserCard name="Олег" age={24}/>
      <Button name="некнопка"/>
      <Welcome name="Катюша"/>
      {show ?  <Chetchik /> :<></>  }
      <Form/>
      <FormElement />
      <Title name="я уже не могу"/>
      <List fruits={list}/>

      <Footer />
    </div>
  );
}
export default App;
