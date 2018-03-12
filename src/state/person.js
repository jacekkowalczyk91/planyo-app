import {database, auth} from '../firebase'

// action type


// action creator

export const toggleGroupInUser = (userId, groupId) => (dispatch, getState) => {
    const peopleData = getState().people.data
    const person = peopleData.find(person => person.id === userId)
    const authUid = auth().currentUser.uid
    if (person.groups && person.groups.includes(groupId))
        database().ref(`/people/${authUid}/${userId}/groups/${person.groups.indexOf(groupId)}`).set(null)
    else
        database().ref(`/people/${authUid}/${userId}/groups/${person.groups ? person.groups.length : 0}`).set(groupId)

}


export const toggleFav = id => (dispatch, getState) => {
    const authUid = auth().currentUser.uid
    const person = getState().people.data.find(person => person.id === id)
    database().ref('/people/' + authUid + '/' + id + '/isFavorite').set(!person.isFavorite)
}


// initial state
const initialState = {
    isFavorite: false
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer