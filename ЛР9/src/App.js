import React from 'react';
import './App.css';
import Oneone from './Oneone';
import CounterParent from './CounterParent';
import FormParent from './FormParent';
import Four from './Four';
import TodoApp from './TodoApp';
import ToggleParent from './ToggleParent';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import TemperatureConverter from './TemperatureConverter';
import IngredientSelector from './IngredientSelector';
import {useState} from'react';



 function App() {

  return (
    <div className="App">
      <Oneone/>
      <CounterParent/>
      <FormParent/>
      <Four/>
      <TodoApp/>
      <ToggleParent/>
      <Seven/>
      <Eight/>
      <Nine/>
      <TemperatureConverter/>
      <IngredientSelector/>
      {/* 
      <Twozd/>
      <Threezd people={[{name:'Олег', age:'24'},{name:'Кирилл', age:'15'} ]} /> 
      <Fourzd numbers= {[1,2,3,4,5,6]}/>
      <Fivezd initialItems={['элемент 1', 'элемент 2']}/>
      <Fivezd/>
      <Sevenzd items={['Даша', 'Катя', 'Кирилл', 'Артем',]} />
      <Eightzd products={[{ name: 'Помогите', price: '$100' }, { name: 'Непомогите', price: '$200' }]} />
      <Ninezd items={['НеКатя', 'НеКирилл', 'НеДаша']} />
      <Tenzd images={[{ url: 'https://avatars.mds.yandex.net/i?id=6fec2fd548a6c5ad7565c0855270863c_l-5246707-images-thumbs&n=13' },
       { url: 'https://avatars.mds.yandex.net/get-mpic/5233681/img_id5175332792336120551.jpeg/orig' }, 
       { url: 'https://images.pexels.com/photos/11096735/pexels-photo-11096735.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
       ]} />
       <Invid /> */}
      {/* show ?  <Counter/> :<></>   */}
      {/* <UserCard name="Олег" age={24}/> */}
      {/* <Onezd buttontext = 'Click'/>     */}
      {/* {show ?  <Sixzd /> :<></>  } */}
      {/* <List fruits={list}/> */ }

    </div>
  );
  }
export default App;
