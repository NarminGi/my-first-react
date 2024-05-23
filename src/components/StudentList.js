import React, { useState } from 'react';

const data = [
  { name: 'ruqayya', isStudent: true, age: 21 },
  { name: "narmin", isStudent: false, age: 20 },
  { name: 'lale', isStudent: true, age: 22 }
];
const StudentList = () => {

}

const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h3>Students</h3>
        <ul>
          {data.filter(item => item.isStudent).map((student, index) => (
            <li key={index} onClick={() => handleClick(student)}>
              {student.name}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginLeft: '20px' }}>
        {selectedStudent && (
          <div>
            <h3>Details</h3>
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Age:</strong> {selectedStudent.age}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
