import React, { useReducer, useEffect, useState } from "react";
import { studentReducer, addNewStudentAction, bulkInsertStudentsAction } from "./StudentsReducer";
import StudentForm from "./StudentForm";
import { Button, Card } from 'react-bootstrap';

const StudentList = () => {
    const [studentsState, dispatch] = useReducer(studentReducer, { students: [], count: 0 });
    const [loading, setLoading] = useState(false);
    const [toggleStudentForm, setToggleStudentForm] = useState(false);

    const loadStudents = () => {
        setLoading(true);
        setTimeout(() => {
            const newStudents = [
                { no: "1", name: "Ahmet" },
                { no: "2", name: "Veli" },
                { no: "3", name: "Murat" },
                { no: "4", name: "Hüseyin" },
                { no: "5", name: "Zehra" },
                { no: "6", name: "Tülin" },
                { no: "7", name: "Mustafa" },
                { no: "3", name: "Mehmet" }
            ];
            dispatch(bulkInsertStudentsAction(newStudents));
            setLoading(false);
        }, 1000);
    }


    const saveStudentHandler = ({ name, no }) => {
        dispatch(addNewStudentAction({ name, no }));
    }

    const closeFormHandler = () => {
        setToggleStudentForm(false);
    }

    return <div className='student-list-container'>
        <div className='row'>
            <div className={toggleStudentForm ? 'col-6' : 'col-12'}>
                <Card>
                    <Card.Body>
                        {loading && <p>Loading...</p>}
                        {!loading && <div>
                            <p>Students Count: {studentsState.count}</p>
                            <ul>
                                {studentsState.students.map(student => <li key={student.no}>
                                    {student.no} - {student.name}
                                </li>)}
                            </ul>
                        </div>}
                    </Card.Body>
                </Card>
            </div>
            <div className={toggleStudentForm ? 'col-6' : 'hide'}>
                <StudentForm saveStudent={saveStudentHandler} closeForm={closeFormHandler} />
            </div>
        </div>
        <div className='button-wrappers mt-2'>
            <Button onClick={loadStudents} className="me-2">Load Students</Button>
            {!toggleStudentForm && <Button onClick={() => setToggleStudentForm(!toggleStudentForm)}>Add New Student</Button>}
        </div>

    </div>;
}

export default StudentList;