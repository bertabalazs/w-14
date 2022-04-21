import React, { Component } from 'react'

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "Hello",
            key2: 0
        }
    }
    render() {
        return (
        <div>
            
            <button onClick={() => this.setState({ key1: 'A mai dátum az nem más mint 4/20' })}>
            {this.state.key1}
            </button>
            <button onClick={() => this.setState({ key2: 1 })}>
            {this.state.key2}
            </button>
        </div>
        
        )
    }
}


export default ButtonWithClass