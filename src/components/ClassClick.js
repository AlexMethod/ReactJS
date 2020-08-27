import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log('Clickedd!!!');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me, you fool</button>
            </div>
        )
    }
}

export default ClassClick

