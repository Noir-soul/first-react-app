import React, { Component } from "react";

class Clock extends Component {

    state = {
        date: new Date()
    }

    stop() {
        this.render()
        clearInterval(this.timer)
        return this.output
    }
    
    render() {

        let hrs = this.state.date.getHours();
        hrs < 10 ? hrs = "0" + hrs : hrs;

        let mins = this.state.date.getMinutes();
        mins < 10 ? mins = "0" + mins : mins;

        let sec = this.state.date.getSeconds();
        sec < 10 ? sec = "0" + sec : sec;

        this.output = `${hrs}:${mins}:${sec}`

        this.timer = setInterval(() => this.setState({date: new Date()}), 1000) //wrapper function did the thing lol

        return(
            <div>
                {this.output}
            </div>
        )
    }
    
}


export default Clock;