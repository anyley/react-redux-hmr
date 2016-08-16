import React from 'react'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'
import { connect } from 'react-redux'


const mapStateToProps = (props, { params: { deckId } }) => ({
    deckId
});


const App = ({ deckId, children }) => {
    return (
        <div className='app'>
            <Sidebar />
            <Toolbar deckId={deckId} />
            <div className="pusher">
                <h1> Deck: {deckId} </h1>
                {children}
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(App);
