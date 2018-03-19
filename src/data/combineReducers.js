import { combineReducers } from 'redux'
import { objectives, objective } from './objectives/reducers'

export default combineReducers({
    objectives,
    objective
});