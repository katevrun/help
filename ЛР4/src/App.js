import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import Counter from'./Counter';
import UserCard from'./UserCard';
import Button from'./Button';
import {useState} from'react';
import FormElement from './FormElement';


function App() {
  const [show, setShow] =useState(true);
 
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
      <FormElement />
      <Footer />
    </div>
  );
}
export default App;
