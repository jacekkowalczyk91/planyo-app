import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'

import auth, {init as initAuth} from './state/auth'
import people, {init as initPeopleSync} from './state/people'
import groups from './state/groups'
import person from './state/person'


const reducer = combineReducers({
    auth,
    people,
    groups,
    person
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(initAuth())

export default store