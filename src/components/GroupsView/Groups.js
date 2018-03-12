import React from 'react'
import {connect} from 'react-redux'
import {Button, Table} from 'react-bootstrap'
import {deleteGroup} from '../../state/groups'
import {Link} from 'react-router-dom'

const Groups = (props) => (
    <div>

        <Table striped bordered condensed hover style={{
            marginTop: 50
        }}> <thead>
        <tr>
            {

                props.groups && props.groups.map(
                    group => (
                        <th key={group.key}>
                            <td>
                            <Link to={`/people/${group.key}`}>
                                {group.name}
                            </Link>
                            </td>
                            <br/><br/>
                            <th>
                            <Button bsStyle="danger" onClick={() => props.deleteGroup(group.key)}>
                                Usuń grupę
                            </Button>
                            </th>
                        </th>

                    )

                )

            }
        </tr>
        </thead>
        </Table>

    </div>
)

const mapDispatchToProps = dispatch => ({
    deleteGroup: id => dispatch(deleteGroup(id))
})

const mapStateToProps = state => ({
    groups: state.groups.data
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Groups)