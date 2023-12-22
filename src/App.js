import React from 'react';
import Student from './component/Student';
import './css/student.css';

const App = () => {
  const students = [
    {
      id: 19,
      name: '_ndtChin',
      image: 'ndtChin.jpg',
      email: 'ndtchin@gmail.com',
    },
    {
      id: 12,
      name: 'chin',
      image: 'ndtChin.jpg',
      email: 'ndtchin@gmail.com',
    },
    {
      id: 2002,
      name: '_ndt',
      image: 'ndtChin.jpg',
      email: 'ndtchin@gmail.com',
    },
    
  ];

  return (
    <div>
      {students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          email={student.email}
        />
      ))}
    </div>
  );
};

export default App;