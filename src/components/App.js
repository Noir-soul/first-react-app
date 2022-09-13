import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 10
    };

    styles = {
        display: "flex",
    }

    Increment = () => {
        this.setState({ count: this.state.count + 1})
    }

    Decrement = () => {
        this.setState({ count: this.state.count - 1})
    }

    Reset = () => {
        this.setState({ count: this.state.count = 10})
    }
    
    render() {
        return(
            <div>
                <h1>Hello World! You are {this.formatCount()}x fun</h1>
                <div style={this.styles} >
                    <button onClick={this.Decrement}>Not Fun</button>
                    <button onClick={this.Increment}>Fun</button>
                    <button onClick={this.Reset}>Reset</button>
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