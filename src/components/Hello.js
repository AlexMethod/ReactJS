import React from 'react';

const Hello = ()=> {
    // return (
    //     <div>
    //         <h1>Hello Wishvas</h1>
    //     </div>
    // )

    const hello_wishvas = React.createElement('h1',null,'Hello Wishvas');
    return React.createElement('div',
    {id : "hello",className : "hello"}
    ,hello_wishvas);
}

export default Hello;