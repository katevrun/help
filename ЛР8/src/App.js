import React from 'react';
import Onez from './Onez';
import Twozd from './Twozd';
import Threezd from './Threezd';
import Fourzd from './Fourzd';
import Fivezd from './Fivezd';
import Sixzd from './Sixzd';
import Sevenzd from './Sevenzd';
import Eightzd from './Eightzd';
import Ninezd from './Ninezd';
import Tenzd from './Tenzd';
import Invid from './Invid';
import './App.css';
import {useState} from'react';



 function App() {

  return (
    <div className="App">
      <Onez/>
      <Twozd/>
      <Threezd people={[{name:'Олег', age:'24'},{name:'Кирилл', age:'15'} ]} /> 
      <Fourzd numbers= {[1,2,3,4,5,6]}/>
      <Fivezd initialItems={['элемент 1', 'элемент 2']}/>
      <Sixzd/>
      <Sevenzd items={['Даша', 'Катя', 'Кирилл', 'Артем',]} />
      <Eightzd products={[{ name: 'Помогите', price: '$100' }, { name: 'Непомогите', price: '$200' }]} />
      <Ninezd items={['НеКатя', 'НеКирилл', 'НеДаша']} />
      <Tenzd images={[{ url: 'https://avatars.mds.yandex.net/i?id=6fec2fd548a6c5ad7565c0855270863c_l-5246707-images-thumbs&n=13' },
       { url: 'https://avatars.mds.yandex.net/get-mpic/5233681/img_id5175332792336120551.jpeg/orig' }, 
       { url: 'https://images.pexels.com/photos/11096735/pexels-photo-11096735.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' }
       ]} />
       <Invid />
      {/* show ?  <Counter/> :<></>   */}
      {/* <UserCard name="Олег" age={24}/> */}
      {/* <Onezd buttontext = 'Click'/>     */}
      {/* {show ?  <Sixzd /> :<></>  } */}
      {/* <List fruits={list}/> */ }

    </div>
  );
  }
export default App;
