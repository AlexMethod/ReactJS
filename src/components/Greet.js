import React from 'react';

// function Greet(){
//     return <h1>Hello Alex</h1>
// }


// const Greet = ()=> <h1>Hello Alex</h1>

// export default Greet;

const Greet = (props) => {

    const {name, heroName } = props;

    return (
        <div>
            <h1>Greetings {name} a.ka. {heroName}</h1>
            {/* {props.children} */}
        </div>
    );
}

export default Greet;