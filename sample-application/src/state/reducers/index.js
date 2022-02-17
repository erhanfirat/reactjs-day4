import { combineReducers } from 'redux';
import studentReducer from './studentReducer';

const reducers = combineReducers({
    students: studentReducer
});

export default reducers;