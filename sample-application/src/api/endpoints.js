import { REQ_TYPES } from './api'

const getTasks = {
    type: REQ_TYPES.GET,
    params: {
        url: "tasks"
    }
};

const postTask = (payload) => ({
    type: REQ_TYPES.POST,
    params: {
        url: "tasks",
        payload
    }
});

const putTask = (payload) => ({
    type: REQ_TYPES.PUT,
    params: {
        url: `tasks/${payload.id}`,
        payload
    }
});

const deleteTask = (taskId) => ({
    type: REQ_TYPES.DELETE,
    params: {
        url: `tasks/${taskId}`
    }
});



export { getTasks, postTask };