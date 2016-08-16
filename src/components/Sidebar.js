import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {saveTextArea, addDeck, showAddDeck, hideAddDeck} from '../actions';

// TODO: не забыть удалить textArea
const mapStateToProps = ({textArea, decks, addingDeck}) => ({
    textArea,
    decks,
    addingDeck
});

// TODO: не забыть удалить saveTextArea
const mapDispatchToProps = dispatch => ({
    saveTextArea(text) { dispatch(saveTextArea(text)) },
    addDeck(name) { dispatch(addDeck(name)) },
    showAddDeck() { dispatch(showAddDeck()) },
    hideAddDeck() { dispatch(hideAddDeck()) }
});


const Sidebar = React.createClass({
    componentDidUpdate() {
        let el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },

    render() {
        let props = this.props;

        return (
            <div className="ui visible left vertical sidebar menu">
                <h2> All Decks: </h2>

                {/*TODO: не забыть удалить*/}
                <textarea ref="ta" defaultValue={props.textArea || 'default' + '...'}
                    onChange={e => this.saveTextArea()} />

                <button className="ui button" onClick={ e => props.showAddDeck() }>
                    New Deck
                </button>

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

    // TODO: не забыть удалить
    saveTextArea(e) {
        let ta = ReactDOM.findDOMNode(this.refs.ta);
        console.log(ta.value);
        this.props.saveTextArea(ta.value);
    },

    createDeck(e) {
        if (e.which !== 13) return;

        const name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
