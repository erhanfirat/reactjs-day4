import axios from 'axios';

const getTasksBasic = () => {
    axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks")
        .then(res => {
            console.log("tasks get > ", res);
        });
};

const getTasksBasicAsync = async () => {
    const res = await axios.get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks");
    console.log("res with await > ", res);
};

const postTaskBasic = (task) => {
    axios
        .post("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks", task)
        .then(res => {
            console.log("task post > ", res);
        })
}

const putTaskBasic = (task) => {
    axios
        .put(`https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks/${task.id}`, task)
        .then(res => {
            console.log("task put > ", res);
        })
}

const deleteTaskBasic = (taskId) => {
    axios
        .delete(`https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/tasks/${taskId}`)
        .then(res => {
            console.log("task delete > ", res);
        })
}

export { getTasksBasic, getTasksBasicAsync, postTaskBasic, putTaskBasic, deleteTaskBasic };