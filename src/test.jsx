import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'


// reducer
const counter = (state={time:new Date().toString(), counter:0}, action) => {
    switch(action.type) {
        case 'INC':
            return Object.assign(state, {counter: state.counter + 1});
            break;
        case 'DEC':
            return Object.assign(state, {counter: state.counter - 1});
            break;
        case 'TIMER':
            return Object.assign(state, {time: new Date().toTimeString()});
            break;

        default:
            return state;
    }
}


// store
const store = createStore(counter);


// component
class App extends React.Component {
    render() {
        return (
            <div>
                <h2> Time: {this.props.time} </h2>
                Counter: {this.props.counter}
                <div>
                    <button onClick={this.props.onInc}> + </button>
                    <button onClick={this.props.onDec}> - </button>
                </div>
            </div>
        )
    }
}


// app renderer
const run = () => {
    ReactDOM.render(
        <App
            time={store.getState().time}
            counter={store.getState().counter}
            onInc={() => store.dispatch({type: 'INC'})}
            onDec={() => store.dispatch({type: 'DEC'})}
        />,
        document.getElementById('root')
    );
}


// subscribe to store events
store.subscribe(run);


// first state render
run();

setInterval( () => {
    store.dispatch({type: 'TIMER'})
}, 1000);