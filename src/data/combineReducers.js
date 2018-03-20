import { combineReducers } from 'redux'
import { objectives, objective } from './objectives/reducers'
import { users } from './users/reducers'

export default combineReducers({
    objectives,
    objective,
    users
});