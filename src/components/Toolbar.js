import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { showAddDeck } from '../actions';


const mapDispatchToProps = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck())
});

// TODO: переделать в React.createClass
const Toolbar = ({ deckId, showAddDeck }) => {
    let deskTools = deckId ? (<div>
        <Link className="ui button" to={`/deck/${deckId}/new`}> New Card </Link>
        <Link className="ui button" to={`/deck/${deckId}/study`}> Study Card </Link>
    </div>) : null;

    return (<div className="ui fixed main menu">
        <button className="ui button" onClick={showAddDeck}> New Deck 1 </button>
        { deskTools }
    </div>);
};

export default connect(null, mapDispatchToProps)(Toolbar)