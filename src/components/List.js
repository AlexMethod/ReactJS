import React from 'react'
import Person from './Person/person'

function NameList() {

    const names = [
        {
            id : 1, 
            name : 'Alex',
            age : '23',
            skill : 'Programming'
        },
        {
            id: 2, 
            name :'Geras',
            age : 24,
            skill : 'Cook'
        },
        {
            id : 3, 
            name : 'Bryan',
            age : 23,
            skill : 'Mathematics'
        }
    ];
    // const nameList = names.map((n,index) => <Person key={index} id={n.id} name={n.name} age={n.age} skill={n.skill} />);
    const nameList = names.map(n => <Person key={n.id} id={n.id} name={n.name} age={n.age} skill={n.skill} />);

    return ( <div> { nameList } </div> )
}

export default NameList