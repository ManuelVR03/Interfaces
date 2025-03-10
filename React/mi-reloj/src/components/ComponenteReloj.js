import { Component } from 'react';

export default class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tictac(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tictac() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hora Actual:</h1>
                <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}