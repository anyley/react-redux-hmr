import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import { Link } from 'react-router';


const mapStateToProps = ({at, decks, addingDeck}) => ({
    at,
    decks,
    addingDeck
});


const mapDispatchToProps = dispatch => ({
    addDeck:  name => dispatch(addDeck(name)),
    showAddDeck:() => dispatch(showAddDeck()),
    hideAddDeck:() => dispatch(hideAddDeck())
});


const Sidebar = React.createClass({
    componentDidUpdate() {
        let el = ReactDOM.findDOMNode(this.refs.add);
        let at = ReactDOM.findDOMNode(this.refs.at);
        this.props.at = at.value();
        if (el) el.focus();
    },

    render() {
        let props = this.props;

        return (
            <div className="ui visible left vertical sidebar menu">
                <h2> All Decks 1: </h2>
                <div>
                <textarea ref="ta" defaultValue={props.at + '...'}></textarea>
                </div>

                <button className="ui button" onClick={ e => props.showAddDeck() }> New Deck </button>

                <ul>
                    {props.decks.map((deck, i) =>
                        <li key={i}>
                            <Link className="ui button" to={`/deck/${deck.id}`}>
                                 {deck.name}
                            </Link>
                        </li>
                    )}
                </ul>
                {props.addingDeck && <input ref="add" onKeyPress={this.createDeck}/>}
            </div>
        );
    },

    createDeck(e) {
        if (e.which !== 13) return;

        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
