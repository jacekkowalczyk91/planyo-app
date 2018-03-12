import React from 'react'
import AddGroupForm from './AddGroupForm'
import Groups from './Groups'
class GroupsView extends React.Component {

    render() {
        return(
            <div>
                <AddGroupForm/>
                <Groups/>
            </div>
        )
    }
}
export default GroupsView

