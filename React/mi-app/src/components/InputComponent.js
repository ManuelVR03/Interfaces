import {Component} from 'react'

export default class InputComponent extends Component {
    render() {
        return (
            <div>
                <input value={this.props.nombre} onChange={this.props.cambiarNombre}></input>
            </div>
        )
    }
}