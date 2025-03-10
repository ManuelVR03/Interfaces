import {Component} from 'react';

export default class InputComponent extends Component {
    render(){
        return (
            <div>
                <input type="number" name="num1" placeholder="Número 1" onChange={this.props.guardaNum}/>
            </div>
        );
    }
}