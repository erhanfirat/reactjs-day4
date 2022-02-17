import { REQ_TYPES } from './api'

const getTasks = {
    type: REQ_TYPES.GET,
    url: "tasks"
};

const postTask = (payload) => ({
    type: REQ_TYPES.POST,
    url: "tasks",
    payload
});

const putTask = (payload) => ({
    type: REQ_TYPES.PUT,
    url: `tasks/${payload.id}`,
    payload
});

const deleteTask = (taskId) => ({
    type: REQ_TYPES.DELETE,
    url: `tasks/${taskId}`
});

const buggyTask = (taskId) => ({
    type: REQ_TYPES.DELETE,
    url: `tasks-buggy-url/${taskId}`
});



export { getTasks, postTask, putTask, deleteTask, buggyTask };