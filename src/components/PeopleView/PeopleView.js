import React from 'react'
import PeopleViewsTable from "./PeopleViewsTable";
import './PeopleView.css'
import PeopleSearchForm from './PeopleSearchForm'
import ShareButton from "../ShareButton/ShareButton";

class PeopleView extends React.Component {

    state = {
        activeFilterNames: [],
        currentSearchPhrase: '',
        // groupIdFilter: '-KxIdiuE43-WzB-nKEY0'
        groupIdFilter: this.props.match.params.groupId
    }

    handleSearchPhraseChange = event => {
        this.setState({
            currentSearchPhrase: event.target.value
        })
    }

    render() {

        return (
            <div>
                <h2 style={{
                    marginTop: 80,
                    paddingBottom: 40
                }}>Kandydaci</h2>

                    <PeopleSearchForm
                        handleChange={this.handleSearchPhraseChange}
                        currentSearchPhrase={this.state.currentSearchPhrase}

                    />
                    <PeopleViewsTable
                        currentSearchPhrase={this.state.currentSearchPhrase}
                        groupIdFilter={this.state.groupIdFilter}
                    />

            </div>
        );
    }
}

export default PeopleView;