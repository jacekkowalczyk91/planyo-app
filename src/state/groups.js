import {auth, database } from '../firebase'

const SET_GROUPS = 'people/SET_GROUPS'

const setGroups = people => ({
    type: SET_GROUPS,
    data: people
})

export const init = () => dispatch => {
    const uid = auth().currentUser.uid
    database().ref('/groups/' + uid).on(
        'value',
        snapshot => {
            dispatch(setGroups(snapshot.val()))
        }
    )
}


export const addGroupTask = (content) => () => {
    const uid = auth().currentUser.uid
    database().ref('/groups/' + uid).push(content)
}

export const deleteGroup = id => dispatch => {
    const uid = auth().currentUser.uid
    database().ref(`/groups/${uid}/${id}`).set(null)
}

const initialState = {
    data: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            let data = action.data || {}
            return {
                ...state,
                data: Object.entries(data).map(([key, val]) => ({ key, ...val}))
            }
        default:
            return state
    }
}