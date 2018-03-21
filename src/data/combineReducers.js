import { combineReducers } from 'redux'
import { objective, objectives } from './objectives/reducers'
import { user } from './user/reducers'
import { users } from './users/reducers'

export default combineReducers({
    objective,
    objectives,
    user,
    users,
});