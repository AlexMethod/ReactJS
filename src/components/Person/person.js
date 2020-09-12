import React, { Component} from 'react'

class Person extends Component {

    constructor(props){
        super(props)

        //Anti pattern, assign inmutable values props, to changable values state
        this.state =  {
            id : this.props.id,
            name : this.props.name,
            age : this.props.age,
            skill : this.props.skill
        }
    }

    render() {
        return(
            <div>
                <h1>Hi I'm {this.state.name}. I'm {this.state.age}. I know {this.state.skill}</h1>
            </div>
        )
        
    }

}

export default Person