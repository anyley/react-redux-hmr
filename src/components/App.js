'use strict';

import React from 'react'
import { connect } from 'react-redux'

import Sidebar from './Sidebar'
import Toolbar from './Toolbar'


const mapStateToProps = (props, { params: { deckId, textArea } }) => ({
    deckId,
    textArea
});

// != [] ### <= >= === !== -> <- || &&

//const App = ({ deckId, children }) => {
class App extends React.Component {

    render() {
        return (
            <div>
                <Sidebar />
                <Toolbar deckId={this.props.deckId}/>
                <div className="pusher">
                    <h1> Deck: {this.props.deckId} </h1>
                    <textarea defaultValue={this.props.textArea}></textarea>
                    {this.props.children}
                </div>
            </div>
        )
    }
};

export default connect(mapStateToProps)(App);
