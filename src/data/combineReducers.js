import { combineReducers } from 'redux'
import { objective, objectives } from './objectives/reducers'
import { user } from './user/reducers'
import { users } from './users/reducers'
import { auth } from './auth/reducers'

export default combineReducers({
    objective,
    objectives,
    user,
    users,
    auth,
});