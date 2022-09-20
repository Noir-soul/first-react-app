import React, { Component } from 'react';
import Greet from './Greet';
import CommentBox from './Comment';
import Clock from './Clock'

class App extends Component {
    state = {
        count: 2
    };

    styles = {
        display: "flex",
    }
    
    render() {
        return(
            <div>
                <Clock/>
                <Greet/>
                <h2>This is {`${this.formatCount() == 0 ? 'not ' : this.formatCount() == 1 ? " " : this.formatCount()+'x ' }`}fun</h2>
                <div style={this.styles} >
                    <button onClick={() => {this.setState({ count: this.state.count - 1})}}>Not Fun</button>
                    <button onClick={() => {this.setState({ count: this.state.count + 1})}}>Fun</button>
                    <button onClick={() => {this.setState({ count: this.state.count = 2})}}>Reset</button>
                </div>
                <CommentBox/>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 0 : count;
    }
}

export default App;