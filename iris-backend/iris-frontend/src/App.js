import React, {useState, useEffect} from 'react';
import Students from './components/students/Students.js';
import Axios from 'axios';

function App() {
  let [students, setStudents] = useState([])

  useEffect(() => {
    Axios.get('/api/students').then((response) => {
      setStudents(response.data);
    })
  }, []);

  let studentMap = students.map(e => <Students studentName={e.name} studentGrade={e.grade}></Students>)

  return (
    <div>{studentMap}</div>
  );

  };
  
  
export default App;