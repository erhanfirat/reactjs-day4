
export const addNewStudentAction = (student) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            student: student
        })
    }
};


export const bulkInsertStudentsAction = (students) => {
    return (dispatch) => {
        dispatch({
            type: "bulkInsert",
            students: students
        })
    }
};

export const deleteStudentAction = (studentId) => {
    return (dispatch) => {
        dispatch({
            type: "delete",
            student: { id: studentId }
        })
    }
};
