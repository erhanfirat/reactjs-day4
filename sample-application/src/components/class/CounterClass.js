import React from "react";


class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, userName: "Veli", increment: 5 };
    }
    counterInterval = null;
    setTimer() {
        this.counterInterval = setInterval(() => {
            this.setState({ ...this.state, counter: this.state.counter + this.state.increment })
        }, this.props.time);
        this.userName = "Mustafa";
    }

    resetTimer() {
        const newState = { ...this.state, counter: 0 };
        this.setState(newState)
    }

    componentDidMount() {
        console.log("Counter Mounted!");
        this.setTimer();
    }

    componentDidUpdate() {
        console.log("Counter Updated!");
    }

    componentWillUnmount() {
        clearInterval(this.counterInterval);
        console.log("Counter WillUnmount!");
    }

    render() {
        return <div>
            <p>Counter: {this.state.counter}</p>
            <button onClick={() => this.resetTimer()}>Reset</button>
            <button onClick={() => this.setState({ ...this.state, counter: 0 })}>Reset Inline</button>
        </div>
    }
}

export default CounterClass;