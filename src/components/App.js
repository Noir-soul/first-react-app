import React, { Component } from 'react';
import Greet from './Greet';

class App extends Component {
    state = {
        count: 10
    };

    styles = {
        display: "flex",
    }
    
    render() {
        return(
            <div>
                <Greet/>
                <h2>Hello World! You are {`${this.formatCount() != 0 ? this.formatCount()+'x' : 'not'}`} fun</h2>
                <div style={this.styles} >
                    <button onClick={() => {this.setState({ count: this.state.count - 1})}}>Not Fun</button>
                    <button onClick={() => {this.setState({ count: this.state.count + 1})}}>Fun</button>
                    <button onClick={() => {this.setState({ count: this.state.count = 10})}}>Reset</button>
                </div>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 0 : count;
    }
}

export default App;