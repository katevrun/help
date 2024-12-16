import React, { useState } from 'react';


function Invid() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const addStudent = () => {
    if (name && age) {
      const newStudent = { name, age };
      setStudents([...students, newStudent]);
      setName('');
      setAge('');
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="student-list-container">
      <h1>Список студентов</h1>
    
      <div className="input-form">
        <input
          type="text"
          placeholder="Имя студента"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={addStudent}>Добавить студента</button>
      </div>

      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.age} лет
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Invid;
