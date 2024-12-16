import React from 'react';
import Header from './Header';
import './App.css';
import UserCard from'./UserCard';
import Button from'./Button';
import {useState} from'react';
import Welcome from './Welcome';
import Chetchik from './Chetchik';
import Title from './Title';
import List from './List';
import Six from './Six';
import Simvol from './Simvol';
import Eight from './Eight';
import DayNight from './DayNight';
import Image from './Image';
import Individ from './Individ';


function App() {
  const [show, setShow] =useState(true);
  const list = ['яблоко', 'банан', 'небанан'];
 
  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <button onClick={() => setShow(!show)}>
                показать
            </button>
      <UserCard name="Олег" age={24}/>
      <Button name="некнопка"/>
      <Welcome name="Катюша"/>
      {show ?  <Chetchik /> :<></>  }
      <Title name="я уже не могу"/>
      <List fruits={list}/>
      <Six />
      <Simvol />
      <Eight />
      <DayNight/>
      <Image src="https://cdnstatic.rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg" caption="собака" />
      <Individ 
        src="https://q9c5t3u9.rocketcdn.me/wp-content/uploads/2023/07/hamster-1555083.jpg" 
        alt="Хомяк" 
        description="Существует множество пород хомяков. Хотя классический золотой хомяк очень популярен, большой популярностью также пользуются плюшевые хомячки, пегие хомячки, сиамские хомячки и джунгарские карликовые хомячки. Последний вид карликовых хомяков особенно известен своей надежностью." 
      />
    </div>
  );
}
export default App;
